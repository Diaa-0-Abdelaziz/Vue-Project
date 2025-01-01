<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRouter();
const form = reactive({
   car_title : '',
   car_desc : '',
    Car_color : '',
    Car_brand : '',
    Car_model : '',
    Car_year : '',
    Car_Type : '',
    No_Of_Doors : '',
    Engine : '',
    Minimum_of_Days : '',
    Deposit : '',
    price_of_Day : '',
    price_of_Week : '',
    price_of_Month : '',
    email : '',
    whatsapp : '',

})
const handelSubmit = async ()=>{
 const newCar = {
  car_title : form.car_title,
   car_desc : form.car_desc,
    Car_color : form.Car_color,
    Car_brand : form.Car_brand,
    Car_model : form.Car_model,
    Car_year : form.Car_year,
    Car_Type : form.Car_Type,
    No_Of_Doors : form.No_Of_Doors,
    Engine : form.Engine,
    Minimum_of_Days : form.Minimum_of_Days,
    Deposit : form.Deposit,
    price_of_Day : form.price_of_Day,
    price_of_Week : form.price_of_Week,
    price_of_Month : form.price_of_Month,
    email : form.email,
    whatsapp : form.whatsapp,
 }
//  http://localhost:3000/#/products/b305
// http://localhost:3000/#/Projects/b305
 try{
        const responce = await axios.post('http://localhost:5000/cars/', newCar);
        setTimeout(()=>{
          route.push(`/Projects/${responce.data.id}`)
        }, 3000)
    }catch(error){
        console.log(error)
    }
}
</script>

<template>
<section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handelSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add car</h2>

          <div class="mb-4">
            <label for="car_title" class="block text-gray-700 font-bold mb-2">car_title</label>
            <input v-model="form.car_title" type="text" id="car_title" name="car_title" class="border rounded w-full py-2 px-3 mb-2" placeholder="car_title"  required />
          </div>

          <div class="mb-4">
            <label for="car_desc" class="block text-gray-700 font-bold mb-2">car_desc</label>
            <textarea v-model="form.car_desc" id="car_desc" name="car_desc" class="border rounded w-full py-2 px-3" rows="4" placeholder="car_desc"></textarea>
          </div>


          <h3 class="text-2xl mb-5">Car Info</h3>

          <div class="mb-4">
            <label for="Car_color" class="block text-gray-700 font-bold mb-2">Car_color</label>
            <input  v-model="form.Car_color" type="text" id="Car_color" name="Car_color" class="border rounded w-full py-2 px-3 mb-2" placeholder="Car_color"  required />
          </div>

          <div class="mb-4">
            <label for="Car_brand" class="block text-gray-700 font-bold mb-2">Car_brand</label>
            <input v-model="form.Car_brand" type="text" id="Car_brand" name="Car_brand" class="border rounded w-full py-2 px-3 mb-2" placeholder="Car_brand"  required />
          </div>

          <div class="mb-4">
            <label for="Car_model" class="block text-gray-700 font-bold mb-2">Car_model</label>
            <input v-model="form.Car_model" type="text" id="Car_model" name="Car_model" class="border rounded w-full py-2 px-3 mb-2" placeholder="Car_model"  required />
          </div>

          <div class="mb-4">
            <label for="Car_year" class="block text-gray-700 font-bold mb-2">Car_year</label>
            <input v-model="form.Car_year" type="text" id="Car_year" name="Car_year" class="border rounded w-full py-2 px-3 mb-2" placeholder="Car_year"  required />
          </div>

          <div class="mb-4">
            <label for="Car_Type" class="block text-gray-700 font-bold mb-2">Car_Type</label>
            <input v-model="form.Car_Type" type="text" id="Car_Type" name="Car_Type" class="border rounded w-full py-2 px-3 mb-2" placeholder="Car_Type"  required />
          </div>

          <div class="mb-4">
            <label for="No_Of_Doors" class="block text-gray-700 font-bold mb-2">No_Of_Doors</label>
            <input v-model="form.No_Of_Doors" type="number" id="No_Of_Doors" name="No_Of_Doors" class="border rounded w-full py-2 px-3 mb-2" placeholder="No_Of_Doors"  required />
          </div>

          <div class="mb-4">
            <label for="Engine" class="block text-gray-700 font-bold mb-2">Engine</label>
            <input v-model="form.Engine" type="text" id="Engine" name="Engine" class="border rounded w-full py-2 px-3 mb-2" placeholder="Engine"  required />
          </div>

          <div class="mb-4">
            <label for="Minimum_of_Days" class="block text-gray-700 font-bold mb-2">Minimum_of_Days</label>
            <input v-model="form.Minimum_of_Days" type="number" id="Minimum_of_Days" name="Minimum_of_Days" class="border rounded w-full py-2 px-3 mb-2" placeholder="Minimum_of_Days"  required />
          </div>

          <div class="mb-4">
            <label for="Deposit" class="block text-gray-700 font-bold mb-2">Deposit</label>
            <input v-model="form.Deposit" type="number" id="Deposit" name="Deposit" class="border rounded w-full py-2 px-3 mb-2" placeholder="Deposit"  required />
          </div>

          <div class="mb-4">
            <label for="price_of_Day" class="block text-gray-700 font-bold mb-2">price_of_Day</label>
            <input v-model="form.price_of_Day" type="number" id="price_of_Day" name="price_of_Day" class="border rounded w-full py-2 px-3 mb-2" placeholder="price_of_Day"  required />
          </div>

          <div class="mb-4">
            <label for="price_of_Week" class="block text-gray-700 font-bold mb-2">price_of_Week</label>
            <input v-model="form.price_of_Week" type="number" id="price_of_Week" name="price_of_Week" class="border rounded w-full py-2 px-3 mb-2" placeholder="price_of_Week"  required />
          </div>

          <div class="mb-4">
            <label for="price_of_Month" class="block text-gray-700 font-bold mb-2">price_of_Month</label>
            <input v-model="form.price_of_Month" type="number" id="price_of_Month" name="price_of_Month" class="border rounded w-full py-2 px-3 mb-2" placeholder="price_of_Month"  required />
          </div>

         
      
       
          
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 font-bold mb-2"
              >Contact Email</label
            >
            <input
              type="email"
              v-model="form.email"
              id="email"
              name="email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="whatsapp"
              class="block text-gray-700 font-bold mb-2"
              >Contact Phone</label
            >
            <input
              type="tel"
              v-model="form.whatsapp"
              id="whatsapp"
              name="whatsapp"
              class="border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>