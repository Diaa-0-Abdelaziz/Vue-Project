<script setup>
import { PhoneNumberUtil} from 'google-libphonenumber';
import { computed,onMounted,defineProps, reactive, ref, onUnmounted } from 'vue';
const props = defineProps({
  field: Object,
});
const emit = defineEmits(['input-change-event']);

// containerRef => we passed it to the parent div as attr **'ref="containerRef"'** and use it in handleClickOutside func
const containerRef = ref(null);
// searchQuery include value '2 index' when user write it to filter the list of countries codes
let searchQuery = ref("");
// errors incude error that user do it when he write wrong number in input phone nubmer
let errors = ref("");
// toggle list of countries codes **"open and close ul in html code"**
let openandclose_CountryCode = ref(false);
// countriesCodes is an array include all of **cauntries codes**
const countriesCodes = ref([]);

// countryCode is the default value that display in html code **'like select box default value'**
const countryCode = reactive({
  code: '+20',
  flag: 'fi fi-eg'
});
// finalResult is a final result of Country Code && National Number after analysis it from google-libphonenumber library
 const finalResult = reactive({
  Country_Code:"",
  National_Number:"",
 })
// 😅😅 دي الحركة الثعبانية اللى قولتلك عليها يا بشمهندس
 const emptyResult = reactive({
  Country_Code:"",
  National_Number:"",
 })
 
const phoneUtil = PhoneNumberUtil.getInstance();

// @Click func to open and close the list of countries codes
const toggleCountryCode = ()=>{
  openandclose_CountryCode.value = !openandclose_CountryCode.value
}

onMounted(() => {
  const regions = phoneUtil.getSupportedRegions();
  countriesCodes.value = regions.map(region => ({
    code: `+${phoneUtil.getCountryCodeForRegion(region)}`,
    name: region,
    flagClass: `fi fi-${region.toLowerCase()}`,
  }));
  // calling Geolocation func when the component be **onMounted**
    getCountryFromGeo();
 
});
// create Geolocation func to display value of region now of user
const getCountryFromGeo = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
          const country = data.countryCode;
          const countryInfo = countriesCodes.value.find(item => item.name.includes(country));
          if (countryInfo) {
            countryCode.code = countryInfo.code;
            countryCode.flag = countryInfo.flagClass;
          }
        })
        .catch(error => {
          console.error("Error fetching geolocation:", error);
        });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};



// create handleClickOutside func that make user if he click out side of list then list will be closed and empty search input
const handleClickOutside = (event) => {
  if (containerRef.value && !containerRef.value.contains(event.target)) {
    openandclose_CountryCode.value = !openandclose_CountryCode; 
    searchQuery.value = "";  
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});


// handelFlagSelect is a func that display the date **'which user selected it'** in html code 
const handelFlagSelect = (icon, code)=>{ 
  countryCode.flag = icon
  countryCode.code = code
  searchQuery.value = "";  
}


// handleInputChange is @input func that passy value of event to **validate Phone Number func** 
const handleInputChange = (event) => {
  validatePhoneNumber(event.target.value, countryCode.code);
};

const validatePhoneNumber = (phone, countryCode) => {
  try {
    const fullPhoneNumber = `${countryCode}${phone}`;
    const parsedNumber = phoneUtil.parseAndKeepRawInput(fullPhoneNumber);

    finalResult.Country_Code =JSON.stringify(parsedNumber.getCountryCode())
    finalResult.National_Number =JSON.stringify(parsedNumber.getNationalNumber())
    console.log(finalResult)
    const isValid = phoneUtil.isValidNumber(parsedNumber);
    if (!isValid) {
      errors.value = "The phone number is invalid"
      emit('input-change-event', emptyResult)
      return;
    }else{
      emit('input-change-event', finalResult)
      errors.value = ""
    }
      const regionCode = phoneUtil.getRegionCodeForNumber(parsedNumber);
      const metadata = phoneUtil.getMetadataForRegion(regionCode);

      if (!metadata || !metadata.numberFormatList || !metadata.numberFormatList.length) {
        return;
      }
      
  } catch (error) {
    switch (error.message) {
    case "The string supplied did not seem to be a phone number":
      errors.value = "The string supplied did not seem to be a phone number";
      break;
    case "The string supplied is too short to be a phone number":
      errors.value = "The string supplied is too short to be a phone number";
      break;
    case "The string supplied is too long to be a phone number":
      errors.value = "The string supplied is too long to be a phone number";
      break;
    default:
      console.error("Unknown error:", error.message);
  }
  }
};

const filteredCountries = computed(() => {
  //this condation mean if user didn't write anything in search input it will be display all countries Codes 
  if (searchQuery.value.trim() === "") { 
    return countriesCodes.value;  
  }
  return countriesCodes.value.filter(country => 
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
    country.code.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
// noResults used to display a simple message if there are not result while searching about countries codes
const noResults = computed(() => {
  return filteredCountries.value.length === 0 && searchQuery.value.trim() !== "";
});
</script>

<template>
  <div>
    <div class=" flex flex-row gap-3">
        <div>     
            <div ref="containerRef" @click="toggleCountryCode" class=" relative flex flex-row gap-1 p-2 bg-gray-900 rounded-xl w-20 text-white border-2 border-gray-900 cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-200 ">
                <p :class="countryCode.flag"></p>
                <p>{{ countryCode.code }}</p>
                <!-- search input -->
                <input 
                v-model="searchQuery"
                  type="text"
                  class="w-full absolute  opacity-0  top-0 left-0 bg-transparent h-full flex items-center outline-none"
                  placeholder="Sea"
                  maxlength="2"
                />
                
                <ul v-if="openandclose_CountryCode" class=" absolute bg-white text-black top-8 max-h-40 overflow-y-auto w-36 left-1/2 border-2 rounded-xl  -translate-x-1/2 ">
                    <li class=" flex items-center cursor-pointer p-1 mb-2 hover:bg-slate-200 transition-all duration-200" v-for="(country, i) in filteredCountries " :key="i" @click="handelFlagSelect(country.flagClass, country.code)">
                      <span :class="country.flagClass" :countryCode="country.code" class="inline-block mr-2"></span>
                      {{ country.code }} {{ country.name }}
                    </li>
                    <p v-if="noResults" class="text-red-500 mt-2 text-sm font-bold text-center">Sorry, no matching country found.</p>
                </ul>
            </div>
        </div>
        <input
          :type="field.type"
          :name="field.name"
          :placeholder="field.placeholder"
          v-model="field.value"
          class="border outline-none rounded p-2 w-full"
        @input="handleInputChange"
        />
    </div>
      <p v-if="errors" class="text-red-500 text-sm mt-1">{{ $t(errors) }}</p>
  </div>
</template>