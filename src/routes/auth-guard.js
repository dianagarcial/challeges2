const isAuthenticateGuard = async (to, from, next)=>{
    return new Promise ( () => {
        const random =Math.random()*100;
        if(random >50){
            console.log('logueado async')
            next()
        } else{
            console.log( random, 'bloquedo async')
            next({name:'/'})
        }
    })
}

export default isAuthenticateGuard;