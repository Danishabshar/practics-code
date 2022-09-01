let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let n=parseInt(readLine())
// let arr=readLine().split(" ")

// let num=[]
// let co=[]
// for(let i=0; i<n; i++){
//   let c=0;
//   let ele=arr[i].split("")
//   console.log(ele)
//   for(let j=0; j<ele.length; j++){
//     if(ele[j]==2){
//       c++
//     }
    
//   }num.push(ele)
//   co.push(c)
// }

// let obj={}
// for(let i=0; i<arr.length; i++){
//   obj[arr[i]]=co[i]
// }
// let ans=[]
// for(let i=0; i<1;i++){
//   ans.push(obj)
// }
// console.log(...ans)

// let set=new Set(ans)
// console.log(set)
