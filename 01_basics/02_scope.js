
// const conding =[{language:"Java"},{language:"JS"},{language:"Python"}]

// conding.forEach((item,index)=>{console.log(item.language)
//     console.log(index)
// })

const arr = [1,2,3,4,5,6,7,8,9,10]

// const arr1 = arr.filter((num)=>{return num<4})
// console.log(arr1)

// const test=0;
// const arr2= arr.map((a)=> a+10)
// .map((b)=> b+10)
// .filter((c)=>c>25)
// .reduce((a,c)=>a+c,test)
// console.log(arr2)

const total = arr.reduce((a,c)=>{return a+c},3)
console.log(total)

foreach
filter
Map
reduce