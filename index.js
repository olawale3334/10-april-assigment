 //  palindrome string
 function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  
  console.log(isPalindrome("pop")); 
  console.log(isPalindrome("life")); 
 
 
 //max number
 let numbers = [1, 2, 100, 3, -1];
let largest = numbers[0];
 function maxNumber() {
    for (const num of numbers) {
        if (num > largest) {
          largest = num;
        }
      }
      console.log(largest);
 }
 maxNumber()

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

 //prime number 2,3,5 7 11
 function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  console.log(isPrime(2)); 
  console.log(isPrime(6)); 
// multiple of num
function generateMultiples(num, count) {
    let multiples = [];
    for (let i = 1; i <= count; i++) {
      multiples.push(num * i);
    }
    return multiples;
  }
  
  console.log(generateMultiples(5,3));
// merge 2 arrays and sort 




function mergeAndSort(arr1, arr2, order) {
    let mergedArray = [...arr1, ...arr2];
  
    if (order === "ascending") {
      return mergedArray.sort((a, b) => a - b);
    } else if (order === "descending") {
      return mergedArray.sort((a, b) => b - a);
    } else {
      console.log("erong sort param");
    }
  }
  
  let players1 = ["ronaldo","messi", "palmer"];
  let players2 = ["yamal","osime","boniface"];
  
  console.log(mergeAndSort(players1, players2, "ascending")); 
  console.log(mergeAndSort(players2,players1,  "descending")); 
  

  //
  let contribution = [
    { name: 'pantong', amount: 100 },
    { name: 'jennifer', amount: 200 },
    { name: 'olushola', amount: 150 },
  ]
  
  function addNewMembers(name, amount) {
    let existingMember = false;
    for(index in contribution) {
      if (contribution[index].name === name) {
        contribution[index].amount += amount;
        existingMember = true;
        break;
      }
    }
    if (!existingMember) {
      contribution.push({ name, amount });
    }
  }
  
  addNewMembers('jennifer', 400)
  addNewMembers('peter', 200)
  addNewMembers('sandra', 120)
  
  console.log("List after adding new members:", contribution);
  

   function withdrawByAMember( name, amount){
       
       for(index in contribution){
        if (contribution[index].name === name){
            contribution[index].amount -= amount
           
            
        } else if (contribution[index].name ===name){
              contribution[index].amount < amount || contribution[index]-amount < 0
              return (name,amount )
        }   
        
         
       } 

         
   }
   withdrawByAMember("jennifer", 700)
    console.log( "list after a memeber withdraw",contribution)


    function deleteContributor(contribution, name) {
      let newContribution = [];
      for (let i = 0; i < contribution.length; i++) {
        if (contribution[i].name !== name) {
          newContribution.push(contribution[i]);
        }
      }
      return newContribution;
    }
    
    console.log(deleteContributor(contribution, "jennifer"));
    