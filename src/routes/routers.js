import { createWebHashHistory } from "vue-router";
import{ routes} from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

const canAccess =()=>{

    return new Promise( resolve =>{
        const random= Math.random()*100;
        if(random >50){
            console.log('logueado async')
            resolve()
        }else{
            console.llog(random, 'bloqueado async')
            resolve(false)
        }
    })
}

router.beforeEach(async(to, from, next)=> {
    const authorized= await canAccess();
    
    authorized ? next(): next({name:'/'})
})