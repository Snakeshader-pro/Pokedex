import { createRouter, createWebHistory } from "vue-router";
import Account from '@/views/Account.vue';
import Friend from '@/views/Friend.vue';
import Home from '@/views/Home.vue';
import Team from '@/views/Team.vue';
import Pokemon from '@/views/Pokemon.vue';


const routes = [

    {
        name: 'Account',
        path: "/Account",
        component: Account,
    },
    {
        name: 'Friend',
        path: "/Friend",
        component: Friend,
    },
    {
        name: 'Team',
        path: '/Team',
        component: Team,
    },
    {
        name: 'Pokemon',
        path: "/Pokemon/:name_pokemon",
        component: Pokemon,
        props: true,
    },
    {
        name: 'Home',
        path: "/",
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;