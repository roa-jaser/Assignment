// Task 2
function CalcSumAvg(nums){
    // If we have an empty array we return sum=0 and average=0
    if(nums.length===0){
        return{sum:0, avg:0};
    }
    // we calculate the sum of the array
    const sum=nums.reduce((acc,num)=> acc+num,0);
    // we calculate the average of the array
    const avg=sum/nums.length;
    return {sum,avg};

}
// const array=[1,2,3,4,5,6];
// const s=CalcSumAvg(array);
// console.log(s);

// Task 3 
function RemovesAllDauplicates(array){
// Create a Set to store unique values
const uniqueset=new Set(array);
// Convert the Set back to an array
return [... uniqueset];
}

