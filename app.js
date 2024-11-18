const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];
for(let i = 0; i <= numbers.length; i++){
    let count = 0;
    let primeArray = [];
    if(numbers[i] % numbers.values == 0){
        count++;
        if(count == 2){
            primeArray.push(numbers[i]);
            console.log("Prime Number:", numbers[i]);
        }
    }
}
primeArray = primeArray((a,b) => a-b);
console.log("Minimum Value: ", primeArray[0]);
console.log("Maximum Value: ", primeArray[-1]);
