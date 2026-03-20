async function asyncCall() {
    try{
        const sum = 2+3;
        return sum;
        
    }
    catch (error){
        console.error(error);
    }
};
const result = await asyncCall();
  console.log(result);