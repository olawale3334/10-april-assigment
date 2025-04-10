 //max number
 let numbers=[1,2,100,3,-1]
 let maxNumber=  numbers[0];
  for ( let num of numbers){
    if (num > maxNumber){
        maxNumber = num
    } console.log(maxNumber);
    
  }



// factorial of 5!
let r = 1;
 function factorialOF5(){
    for (let i =1; i <= 5; i++){
        r *=i;
   } 
   console.log(`factorial of 10 is ${r}`)
 }
 factorialOF5()

// sum of number
let number =[1,5,7,9,10,20]
let total =0
function sumOfNumber(){
    for(let num of number){
        total +=num
    } console.log(total);
    
}
sumOfNumber()

//count the vowel in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }

  let input = 'ola';
let  vowelCount = countVowels(input);

console.log(`Number of vowel alphabets in "${input}": ${vowelCount}`);

// index of a new in an array
let array =[1,3,5,6,8,7,10]
target = 8
function indexOFAnyNumberInArray(){
    for (let i = 0 ; i<array.length; i++){
        if (array[i] == target){
            console.log(i)
        }
    }
    
}
 indexOFAnyNumberInArray()