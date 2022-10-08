import {createRouter, createWebHashHistory} from 'vue-router';
import {isAuthenticateGuard} from './auth-guard'

const routes=[
    {   path: '/',
        name:'/', 
        component: ()=> import('../pages/ListPage.vue')
    },
    {   path: '/login',
        name:'/', 
        component: ()=> import('../pages/login.vue')
    },
    {
        path:'/pokemon',
        name:'pokemon',
        beforeEnter:[isAuthenticateGuard],
        component:()=> import('../layouts/PokemonLayout.vue'),
        children:[
            {   
                path: '', 
                component: ()=> import('../pages/AboutPage.vue')
            },
           
            {   
                path: '/detail', 
                component: ()=> import('../pages/DetailPage.vue')
            },
            {   
                path: 'pokemon/:id', 
                name: 'pokemon-id', 
                component: ()=> import('../pages/ProductPage.vue'),
                props:(route)=>{
                    const myId=Number(route.params.id)
                    return{
                        id: isNaN(myId) ? 1:myId
                    }
                }
            },
        ]
    },
    
    
    
        {   
            path: '/:pathMatch(.*)*',
            redirect:'/'
        }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;