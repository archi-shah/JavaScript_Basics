let arr=[5,6,5,4,3,2,3,6,8]

let newarr=[]

for(let val of arr)
{
    if(!newarr.includes(val))
    {
        newarr.push(val)
    }
}

console.log(newarr)