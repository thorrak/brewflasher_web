import { createWebHistory, createRouter } from "vue-router";
import FirmwareFinder from "@/FirmwareFinder";
import FirmwareDirect from "@/FirmwareDirect.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: FirmwareFinder,
    },
    {
        path: '/fw/:id',
        component: FirmwareDirect,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;