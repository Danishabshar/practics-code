// Write a program to print the reverse of the given string.
// Input
// codecode
// Output
// edocedoc
// Input Constraints
// 1<=Length of string<=100
// Input string contains only lowercase characters ['a' to 'z'].

function reversestr(str){
	if(str.length <= 1){
		return str;
	}else{

   return reversestr(str.substring(1))+str.charAt(0);
    }

}



	let str=readLine();;
	console.log(reversestr(str));


// //Given a number, check whether it is a prime number or not.
// // Input 1
// // 3
// // Output 1
// // Yes
// // Input 2
// // 4
// // Output 2
// // No

function isPrime(number){
    
if (number===1) {
        return "False";

    

} 
for (let i=2; i<number ; i=i+1) {
    if (number%i===0) {
        return "False";
    }
} return "True";
}

let number=parseInt(readLine());
console.log(isPrime(number));

// //Given an array of numbers, arrange them in a way that it forms the largest value.
// // Input
// // [54, 546, 548, 60]
// // Output
// // 6054854654

// // Note
// // The arrangement 6054854654 gives the largest value.
// // Constraints
// // 1<=N<=1000
// // 1<=Number<=1000000

const arr = [54, 546, 548, 60];
const largestNumber = (arr = []) => {
   if(arr.every( n => n === 0)){
      return '0';
   }
   arr.sort((a, b) => {
      const s1 = new String(a);
      const s2 = new String(b);
      const first = s1 + s2;
      const second = s2 + s1;
      if(first > second){
         return -1;
      }else if(first < second){
         return 1;
      };
      return 0;
   });
   return arr.join('');
};
console.log(largestNumber(arr));

// Given a number N, print reverse of number N.
// Input
// 988
// Output
// 889  

let n = parseInt(readLine())
 let x = n
 if (n<0) {
     n=n*-1
 }
 let rev = 0
 while(n>0) {
     let d = n%10
     rev = rev*10+d
     n=parseInt(n/10)
 }
  if (x<0) {
      console.log(-1*rev)
  } else {
      console.log(rev)
  }

//   [54, 546, 548, 60]
// Output
// 548 54


let ar=readLine().split("").map(Number)
let min=Math.min(...ar)
let max=Math.max(...ar)
console.log(min,max)