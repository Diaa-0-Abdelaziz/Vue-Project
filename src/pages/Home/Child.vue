<script setup>
import {defineProps,reactive} from "vue";
import NumPhone from './NumPhone.vue'
const emit = defineEmits(['change-event']);
const props = defineProps({fields: Array})
const phoneDetails = reactive({
  Country_Code: "",
  National_Number: "",
});
const errors = reactive({});

function fullPhoneNumber(finalResult){
  phoneDetails.Country_Code = finalResult.Country_Code;
  phoneDetails.National_Number = finalResult.National_Number;
}


const validateField = (field) => {
  if (field.rules === "required" && !field.value) 
  {
    errors[field.name] = field.validation_messages.required;
    return false;
  }
  if (field.rules === "phone" &&  
  (!phoneDetails?.Country_Code || !phoneDetails?.National_Number))
  {
    return false;
  }
  errors[field.name] = "";
  return true;
};

const handleSubmit = () => {
  let isValid = true;
  props.fields.forEach((field) => {
    if (!validateField(field)) 
    {
      isValid = false;
    }
  });
  if (isValid) {
    const formData = {};
    props.fields.forEach((field) => {
      formData[field.name] = field.value;
    });
    formData.phone =` ${phoneDetails.Country_Code}${phoneDetails.National_Number}`;
    emit('change-event', formData)
  }
}
</script>



<template>
<h1 class=" text-center ">{{ $t('child') }}</h1>
<div class=" my-5 flex flex-col justify-center items-center gap-8">

  <form @submit.prevent="handleSubmit">
    <div v-for="(field, index) in fields" :key="index" class="mb-6">
      <label :for="field.name" class="block font-medium mb-1">{{ $t(`fields[${index}].label`) }}</label>

      <div v-if="field && field.rules === 'phone'" class=" w-full">
      <NumPhone :field="field" @input-change-event="fullPhoneNumber" />
     </div>

      <div v-else class=" flex flex-row gap-3">
    <input 
      :type="field.type || 'text'"
      :name="field.name"
      :placeholder="field.placeholder"
      v-model="field.value"
      class="border rounded p-2 w-full"
     @input="validateField(field)"
    />
    </div>
      <p v-if="errors[field.name]" class="text-red-500 text-sm mt-1">
        {{ $t(`fields[${index}].validation_messages.required`) }}
      </p>
    </div>
    <button
      type="submit"
      class="bg-blue-500 text-white py-2 px-4 rounded"
      >
     {{ $t('Submit') }}
    </button>
  </form>
</div>
</template>
