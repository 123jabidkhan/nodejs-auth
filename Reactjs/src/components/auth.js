// isLoggedIn
const isLoggedIn =  () =>{ 
    const data = localStorage.getItem('data');
    
    if(data.token === null){
        
        return false;
    }else{
        return true;
    }
}

// doLogin
const doLogin = (data, next) =>{
   localStorage.setItem('data',JSON.stringify(data));  
   next();
}


// doLogout
const doLogout = (next) =>{
    localStorage.removeItem('data');
    next();
}

// get current user
const currentUser = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem('data')).user;
    }else{
        return false;
    }
}

export {isLoggedIn, doLogin, doLogout, currentUser}