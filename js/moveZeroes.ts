export {};
// 双指针 把这个题看做不等于0的应该去前面
const nums = [0,1,0,3,12];
const moveZeroes = (nums: number[]): number[] => {
    let slow = 0; // 指向非0数的位置
    for(let fast = 0; fast < nums.length; fast++) {
        if( nums[fast] !== 0 ) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]; // 交换位置
            slow++;
        }
    }
    return nums;
}

console.log(moveZeroes(nums));
