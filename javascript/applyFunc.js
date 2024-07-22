function applyFunc(a,did){
    return a.map(ele=>{return did(ele)})
}
function did(n){
    return n*n
}
const nums=[1,2,3,4,5]
const res = applyFunc(nums,did)
console.log(res)