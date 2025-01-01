import NotFound from "@/components/NotFound.vue";
import AddCar from "@/pages/AddCar/AddCar.vue";
import HomeVue from "@/pages/Home/HomeVue.vue";
import ProDetails from "@/pages/Project_Details/ProDetails.vue";
import Projects from "@/pages/projects/Projects.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// const { createRouter, createWebHashHistory } = require("vue-router");

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeVue
        },
        {
            path:'/Projects',
            name:'Projects',
            component:Projects
        },
        {
            path:'/Projects/:id',
            name:'ProDetails',
            component:ProDetails
        },
        {
            path:'/add_car',
            name:'AddCar',
            component:AddCar
        },
        {
            path:'/:catchAll(.*)',
            name:'not-found',
            component:NotFound
        }
    ]
})
export default router