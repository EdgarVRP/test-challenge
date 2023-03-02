/*Instrucciones:
3. Calculate the factorial of a number using recursion
*/

function factorial(numero){
    if(numero==1){
        return 1;
    }else{
        return numero*factorial(numero-1);
    }
}
module.exports = factorial;