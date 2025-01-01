<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const carID = route.params.id;
const State = reactive({
cars:{},
isloading:true,
})
onMounted(async()=>{
    try{
        const responce = await axios.get(`http://localhost:5000/cars/${carID}`);
        State.cars = responce.data;
    }catch(error){
        console.log(error)
    }
   
})
</script>

<template>
<div class=" bg-gray-950 m-5 p-2 rounded-md">
    <p class=" text-white text-center text-2xl p-2">{{ State.cars.car_title }}</p>
    <div class=" flex justify-around">
       <div class=" max-w-96">
        <h4 class=" text-orange-500 font-semibold">{{State.cars.car_desc}}</h4>

        <ul class=" text-white flex gap-5 mt-20">
            <li class=" bg-orange-600 px-5 py-1 rounded-md">edit</li>
            <li class=" bg-orange-600 px-5 py-1 rounded-md">delete</li>
        </ul>
       </div>
    
        <div class="">
             <ul class=" text-white text-lg bg-orange-600 rounded-lg p-2 my-2">
              <li> Car color: {{State.cars.Car_color}}</li>
              <li> Car brand: {{State.cars.Car_brand}} <i class="pi pi-car text-orange-800"></i></li>
              <li> Car model: {{State.cars.Car_model}}</li>
              <li> Car year: {{State.cars.Car_year  }}</li>
              <li> Car Type: {{State.cars.Car_Type  }}</li>
             </ul>
             <ul class=" text-yellow-50">
              <li> No. Of Doors: {{State.cars.No_Of_Doors  }}</li>
              <li> Engine:  {{State.cars.Engine  }}</li>
              <li> Minimum of Days: {{State.cars.Minimum_of_Days  }}</li>
              <li> Deposit:  {{State.cars.Deposit  }} <i class="pi pi-dollar text-orange-700"></i></li>
             </ul>
             <ul class=" text-yellow-50 flex flex-row justify-between my-10 px-5">
              <li class="flex items-center flex-col">
                  <span>Day</span>
                  <span>{{State.cars.price_of_Day}} <i class="pi pi-dollar text-orange-700"></i></span>
              </li>
              <li class="flex items-center flex-col">
                  <span>Week</span>
                  <span>{{State.cars.price_of_Week}} <i class="pi pi-dollar text-orange-700"></i></span>
              </li>
              <li class="flex items-center flex-col">
                <span>Month</span>
                  <span>{{State.cars.price_of_Month}} <i class="pi pi-dollar text-orange-700"></i></span>
              </li>
             </ul>
            </div>
    </div>
          
</div>
</template>