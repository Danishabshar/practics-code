// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------

// function groupAnagrams(strs){
//     let obj={}
//     let m1=new Map()
//     let map=new Map()
//     for(let i=0; i<strs.length; i++){
//         let k=strs[i].split('').sort().join("")
//         let p=strs[i]

//         console.log(k)

       
//             if(map.has(k)){
//                 map.set(k,map.get(k)+1);
//             }
//             else{
//                 map.set(k,1);
//                 if(m1.has(p)){
//                     m1.set(p,m1.get(k)+1);
//                 }
//                 else{
//                     m1.set(k,1);
                   
//                 }
           
//             }
       

        
//     }
//     return m1.keys();
   
  
// }
// let arr=["eat","tea","tan","ate","nat","bat"]
// console.log(groupAnagrams(arr))


// // let test_cases=parseInt(readLine())
// // for(let i=0;i<test_cases;i++){
// //   let n = parseInt(readLine())
// //   var arr =readLine().split(",")
// //   console.log(groupAnagrams(arr))
// // }

var checkPossibility = function(nums) {
    let c=0;
  
    for (let i = 1;  i< nums.length; i++){
        if (nums[i] <= nums[i-1]){
           continue;
    }else{
        c++
    }
    }
    
    if(c===1){
        return true;
    }else{
        return false;
    }
    
};
console.log(checkPossibility([-1,4,2,3]))
// var checkPossibility = function(nums) {
// let bool = true
//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i] > nums[i+1]){
// 	    // checking if we can remove nums[i+1] or nums[i]
//             if((!(nums[i] > nums[i+2]) || !(nums[i-1] > nums[i+1])) && bool){
//                 bool = false
//             } else {
//                 return false
//             }
//         }
//     }
//     return true


let N=parseInt(readLine());
let arr=[];
let count=0;
for(i=0;i<N;i++){
  arr.push(parseInt(readLine()));
}
for(i=1;i<N;i++){
  if(arr[i]>=arr[i-1]){
    continue;
  }
  else{ 
      if(arr[i]<=arr[i+1]){
        arr[i-1]=arr[i]-1;
      }
      else{
        arr[i]=arr[i-1]+1;
      }
      break;
  }
}
for(i=1;i<N;i++){
  if(arr[i]<arr[i-1]){
    count++;
    break;
  }
}
if(count>0){
  console.log(false);
}
else{ 
console.log(true);
}