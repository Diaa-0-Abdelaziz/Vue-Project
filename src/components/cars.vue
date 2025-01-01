<script setup>
import {ref, defineProps, computed} from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
   car:Object
})
const ShowFullDesc = ref(false)
const truncate = computed(()=>{
    let descr = props.car.car_desc;
    if(!ShowFullDesc.value){
        descr = descr.substring(0,90) + '...';
    }
    return descr
})
const toggleShowDescr = ()=>{
    ShowFullDesc.value = !ShowFullDesc.value
}
</script>

<template>
<section >
    <div class=" bg-gray-950 m-5 max-w-96 p-2 rounded-md">
    <p class=" text-white text-center text-2xl p-2">{{ car.car_title }}</p>
    <h4 class=" text-orange-500 font-semibold">{{truncate}} <button class=" text-green-600" @click="toggleShowDescr">{{ ShowFullDesc ? "read less" : "read more" }}</button></h4>
    
        <div className="feature_details d-flex justify-content-start align-items-center">
             <ul class=" text-white text-lg bg-orange-600 rounded-lg p-2 my-2">
              <li> Car color: {{car.Car_color}}</li>
              <li> Car brand: {{car.Car_brand}} <i class="pi pi-car text-orange-800"></i></li>
              <li> Car model: {{car.Car_model}}</li>
              <li> Car year: {{car.Car_year  }}</li>
              <li> Car Type: {{car.Car_Type  }}</li>
             </ul>
             <ul class=" text-yellow-50">
              <li> No. Of Doors: {{car.No_Of_Doors  }}</li>
              <li> Engine:  {{car.Engine  }}</li>
              <li> Minimum of Days: {{car.Minimum_of_Days  }}</li>
              <li> Deposit:  {{car.Deposit  }} <i class="pi pi-dollar text-orange-700"></i></li>
             </ul>
             <ul class=" text-yellow-50 flex flex-row justify-between my-10 px-5">
              <li class="flex items-center flex-col">
                  <span>Day</span>
                  <span>{{car.price_of_Day}} <i class="pi pi-dollar text-orange-700"></i></span>
              </li>
              <li class="flex items-center flex-col">
                  <span>Week</span>
                  <span>{{car.price_of_Week}} <i class="pi pi-dollar text-orange-700"></i></span>
              </li>
              <li class="flex items-center flex-col">
                <span>Month</span>
                  <span>{{car.price_of_Month}} <i class="pi pi-dollar text-orange-700"></i></span>
              </li>
             </ul>
            </div>
            <div class=" flex justify-center">
                <RouterLink :to="'/Projects/' + car.id" class=" text-orange-700 font-extrabold bg-white px-3 py-1 rounded-lg">More Details</RouterLink>
            </div>
</div>
</section>
</template>

