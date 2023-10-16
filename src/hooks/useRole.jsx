export default function useRole() {
   const getSessionStorage = () => {
    const userString = sessionStorage.getItem('user');
    const userSession = JSON.parse(userString);
    return userSession;
  };

  const user = getSessionStorage();

  
 if(user){
    return {
        auth:true,
        role:user?.role , 
        user:user
    }
   }else{
    return {
        auth:false,
        role:null,
        user:null
    }


   }


 

}
