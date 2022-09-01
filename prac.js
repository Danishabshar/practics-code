let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let n=parseInt(readLine())
// let arr=readLine().split(" ").map(Number)
// console.log(arr)
// let p=1;
// for(let i=0; i<n; i++){
//     p=p*arr[i]
// }
// console.log(p)

// let arr = [6, 9, 21]

// let gcd = function(a, b) {
//   a = Math.abs(a)
//   b = Math.abs(b)
//   while (a != b) {
//     if (a > b) a =a-b
//     else b=b-a
//   }
//   return a
// }

// function gcd(dividend, divisor) {
//     // Implement this function
	

//   // Implement this function
//  if (dividend == 0){
//         return divisor;
//       }
//           if(divisor===0){
//             return dividend;
//           } else{
//       return gcd(divisor, dividend%divisor)
//           }
//   }


// let gcdArr = function(arr) {
//   let gcdres = gcd(arr[0], arr[1])
//   for (let i=3; i<arr.length; i++) {
//     gcdres = gcd(gcdres, arr[i])
//   }
//   return gcdres
// }

// console.log(gcdArr(arr))


// function smallestCommons(arr) {
//     // Sort the array
//     arr = arr.sort(function (a, b) {return a - b}); // numeric comparison;
//     var min = arr[0];
//     var max = arr[1];
  
//     var numbers = [];
//     var count = 0;
  
//     //Here push the range of values into an array
//     for (var i = min; i <= max; i++) {
//       numbers.push(i);
//     }
//     //Here freeze a multiple candidate starting from the biggest array value - call it j
//     for (var j = max; j <= 1000000; j+=max) {
  
//       //I increase the denominator from min to max
//       for (var k = arr[0]; k <= arr[1]; k++) {
  
//         if (j % k === 0) { // every time the modulus is 0 increase a counting 
//           count++; // variable
//         }
//       }
  
//       //If the counting variable equals the lenght of the range, this candidate is the least common value
//       if (count === numbers.length) { 
//         return j; 
//       }
//       else{
//         count = 0; // set count to 0 in order to test another candidate
//       }
//     }
//   }
  
//   console.log(smallestCommons([3,4,6,2,1,18]));
  

// function gcd(a, b)
// {
//     if (!b)
//        return a;
//     return gcd(b, a % b);
// }
 
// // recursive implementation
// function GcdOfArray(arr, idx)
// {
//     if (idx == arr.length - 1) {
//         return arr[idx];
//     }
//     var a = arr[idx];
//     var b = GcdOfArray(arr, idx + 1);
//     return gcd(a, b);
// }
 
// // Driver Code
// var arr = [3,4,6,2,1,18];
// console.log(GcdOfArray(arr));
 




// let n=parseInt(readLine())
// let num=readLine().split(" ").map(Number)


// num.sort((a, b) => a - b)


// let max=Math.max(...num)

// let ans=[]
// let c=0;
// for(let i=0; i<n; i++){
//   for(let j=0; j<n; j++){
//       if((max*num[i])%num[j]===0){
//           c++
//           if(c===n){
//               ans.push(max*num[i])
//           }
//       }
//   }
// }console.log(...ans)










// function gcd(a,b) {
//     // Implement this function
//   // Implement this function
//  if (a == 0){
//         return b;
//       }
//           if(b===0){
//             return a;
//           } else{
//       return gcd(b,b%a)
//           }
//   }





// function gcdr(num){
//     num.sort((a, b) => a - b)
//   var g=gcd(num[0],num[1]);
 
  
//   for(let i=2; i<num.length; i++){
     
//       g=gcd(g,num[i])
     
//   }
//   return (g);

// }console.log(gcdr(num))


// function leastCommonMultiple(arr) {
//     var minn, max;
//     if ( arr[0] > arr[1] ) {
//         minn = arr[1];
//         max = arr[0];
//     } else {
//         minn = arr[0];
//         max = arr[1];
//     }
//     function repeatRecurse(min, max, scm) {
//         if ( scm % min === 0 && min < max ) {
//             return repeatRecurse(min+1, max, scm);
//         } else if ( scm % min !== 0 && min < max ) {
//             return repeatRecurse(minn, max, scm+max);
//         }
//         return scm;
//     } 
//     return repeatRecurse(minn, max, max);
// }
// console.log(leastCommonMultiple([3,4,6,2,1,18]))



// const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
// // Returns LCM of array elements
// function findlcm(arr, n)
// {
//     // Initialize result
   
//     let ans = arr[0];
 
//     // ans contains LCM of arr[0], ..arr[i]
//     // after i'th iteration,
//     if(i!=n-1){
//     for (let i = 1; i < n; i++){
//         ans = (((arr[i] * ans))/(gcd(arr[i], ans)));
//       }
//     return ans;
//     }
// }
 
// // Driver Code
  
//     let arr = [3,4,6,2,1,18];
//     let n = arr.length;
//     console.log(findlcm([3,4,6,2,1,18],n))
// let n=parseInt(readLine())
// let arr = readLine().split(" ").map(Number)
// var gcd = function (a, b) {
//   return a ? gcd(b % a, a) : b;
// }

// var lcm = function (a, b) {
//   return a * b / gcd(a, b);
// }

// // let arr = [3,4,6,2,1,18];
//   console.log(arr.reduce(lcm,arr[0]))


//   function profit(x,y,z){
       
//     if(x+y===z){
//         return c;
        
//     }else{
//       c++
        
//       return  profit(x-1,y-1,z-1)
//     }
// }


// let n=parseInt(readLine());
//   let c=0;
// for(let i=0; i<n; i++){
//     var [x,y,z]=readLine().split(" ").map(Number)
    
//     console.log(profit(x,y,z))
    
// }


// function profit(x,y,z,c){
  
//   if(x+y===z){
   
//       return c;
      
//   }else{
      
//       c++   //6 9 11
//    return profit(x-1,y-1,z-1,c)
//   }
// }


// let n=parseInt(readLine());
// var c=0; 
// for(let i=0; i<n; i++){
//   var [x,y,z]=readLine().split(" ").map(Number)
  
//   console.log(profit(x,y,z,c))
  
// }


// function calSumUtil( A , B , n , m ){
// 	// Implement this 
// 	// A is the first array
// 	// n is size of array A
// 	// B is the second array
// 	// m is size of array B
// }
	
//   // Wrapper Function 
// function calSum(A, B, n, m ){
// 	// Making first array which have 
// 	// greater number of element
// 	// A is the first array
// 	// n is size of array A
// 	// B is the second array
// 	// m is size of array B 
// 	if(n >= m){ 
// 		return calSumUtil(A, B, n, m)
// 	} 
// 	else{ 
// 		return calSumUtil(B, A, m, n) 
// 	}
// }
//   // Driven Code 
// function Convert_to_Number(list){
// 	for(let each in list){
// 	list[each]=Number(list[each])
// } 
// }
// let testCase =parseInt(readLine())
// for(let i=0;i<testCase;i++){
// 	let A = readLine().split(" ")
// 	Convert_to_Number(A)
// 	let B = readLine().split(" ")
// 	Convert_to_Number(B)
// 	let res = calSum(A, B,A.length,B.length)
// 	console.log(...res)
// }


// let n=parseInt(readLine())
// let arr1=readLine().split(" ").map(Number)
// let arr2=readLine().split(" ").map(Number)

// console.log(arr1)
// console.log(arr2)

// let arr3=arr1.map((value,index)=>value+arr2[index])
// console.log(...arr3)



// let n=parseInt(readLine())

// for (let i=0;i<n;i++) {
// 	let [a, b, z]=readLine().split(" ").map(Number)
// 	let res=(a+b)-z
// 	console.log(res)
// }


// let n=parseInt(readLine())


// 	let a=readLine().split(" ").join("")
// 	let b=readLine().split(" ").join("")
  
   
// 	let res=parseInt(a)+ parseInt(b)

// 	console.log(...res.toString())


// let n1=parseInt(readLine())
// let arr1=[]
// for(let i=0; i<n1; i++){
//   arr1.push(parseInt(readLine()))
// }


// let n2=parseInt(readLine())
// let arr2=[]
// for(let i=0; i<n2; i++){
//   arr2.push(parseInt(readLine()))
// }


// let n3=parseInt(readLine())
// let arr3=[]
// for(let i=0; i<n3; i++){
//   arr3.push(parseInt(readLine()))
// }
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// let ans=[]
// for(let i=0; i<n1; i++){
//   if(arr3.includes(arr1[i])&& (arr3.includes(arr2[i]))){
//     ans.push(arr3[i])
    
//   }
// }

// if(ans.length===0){
//   ans.push(-1)
// }

// for(i=0; i<ans.length; i++){
//  console.log(ans[i])
// }

// let n=readLine()
// let x=n.split("").reverse().join("")


// if(n===x){
//   console.log("True")
// }else{
//   console.log("False")
// }


// let n=parseInt(readLine())
// let x=n;
// if(n<0){
//   n=-1*n
// }

// let rev=0
// let d=0;

// while(n>0){

//   d=n%10;
//   rev=rev*10+d;
//   n=parseInt(n/10)

// }

// if(x>0){
//   console.log(rev)
// }else{
//   console.log(-1*rev)
// }

// A rectangular sheet is made to cut repeatedly by the robotic arm by 
// ½ its length and 1/3 of its width. If the area is 4cm2 after cutting it 
// for three times, what is its original length if original width is 9 cm?(2 Points)


let orihinalwidth=9
let areaaftercut=4
let widthcut=0.3
let lencut=0.25
let noofcut=3

for(let i=0; i<noofcut; i++){
  var nwidth=orihinalwidth-widthcut
}

let nlength=4/nwidth

for(let i=0; i<noofcut; i++){
  var originallength=nlength+lencut
}
console.log(originallength)



let x=parseInt(readLine())
let y=parseInt(readLine())
let thetha;
let c=cos((thetha*3.14)/180)