/* instricciones
Write a function that takes in a number and returns one of the following:
        - If the number is divisible by 3, return 'Fizz'.
        - If the number is divisible by 5, return 'Buzz'.
        - If the number is divisible by 3 and 5, return 'FizzBuzz'
        - Else, return the number passed as an argument
*/
function FizzBuzz(numero){
    if(numero%3==0 && numero%5==0){
        return "FizzBuzz";
    }else if(numero%3==0){
        return "Fizz";
    }else if(numero%5==0){
        return "Buzz";
    }else{
        return numero;
    }
}

module.exports = FizzBuzz;