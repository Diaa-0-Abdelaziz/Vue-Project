<script setup>
import Child from './Child.vue';
import { reactive} from 'vue';

const model = reactive({ name: "", phone: ""});
const personalData = reactive({name:'', phone:''});
var fields =
  [
    {
      label: 'Name',
      name: "name",
      placeholder: 'Enter your Business Name',
      value: '',
      type: '',
      rules: 'required',
      validation_messages: {
        required: 'This field is required'
      }
    },
 
    {
      label: 'phone',
      name: 'phone',
      placeholder: 'Enter your Whatsapp number',
      value: '',
      type: 'tel',
      rules: 'phone',
      validation_messages: {
        phone: 'Incorrect phone number'
      }
    },
  ]

function handleChangeEvent(updateData) {
      personalData.name = updateData.name;
      personalData.phone = updateData.phone;
      model.name = updateData.name;
      model.phone = updateData.phone;
}
</script>

<template>
<section class=" flex flex-col items-center my-11">
  <h1 class=" text-red-900 text-4xl">{{ $t('welcome') }}</h1>
<div class=" p-5 text-3xl font-extrabold text-green-600">
  <ul>
    <li>{{ $t('name') }}: {{ personalData.name }}</li>
    <li>{{ $t('phone') }}: {{ personalData.phone }} </li>
  </ul>
  <ul>
    <li class=" text-red-800">module: {{ model }}</li>
  </ul>
</div>

<Child @change-event="handleChangeEvent" :fields="fields"/>
</section>

<div class=" w-full h-80"></div>

</template>

<style scoped>

</style>