<script>
export default {
  data (){
    return{
      name: 'Diaa Abdelaziz',
      status: "active",
      tasks:['task one', 'task two', 'task three'],
      link: 'https://google.com',
    };
  },
  methods:{
    toggleStatus(){
      if (this.status === 'active') {
        this.status = 'pending'
      }else if (this.status === 'pending'){
        this.status = 'inactive'
      }else{
        this.status = 'active'
      }
    }
  }
};
</script>

<template>
  <h1>{{ name }}</h1>
  <!-- <p v-if="status">user is active</p>
  <p v-else>user is no active</p> -->
  <p>{{ status }}</p>
  <h2>Tasks</h2>
  <br>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <br>
  <a :href="link"> google</a>
  <button @click="toggleStatus"> change status</button>
</template>

<style scoped>

</style>
