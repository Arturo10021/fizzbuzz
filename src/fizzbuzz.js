function generarFizzbuzz(numero) {
    if(numero%3===0){
      return "Fizz";
    }else if(numero===5){
      return "Buzz";
    }else{
        return numero;
        }
    }
  export default generarFizzbuzz;