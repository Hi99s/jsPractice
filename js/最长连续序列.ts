export {};
const longestConsecutive = (nums: number[]): number => {
    if(nums.length === 0) return 0;

    // 去重并存储所有数字
    const numSet = new Set(nums);
    let maxLength = 0; // 记录最长路径

    // 遍历藏宝图
    for(const item of numSet) {
        if(!numSet.has(item - 1)){
            // 看做是起点
            let currentNum = item;
            let currentLength = 1; // 当前路径长度

            // 扩展路径
            while ( numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1; // 路径长度加一 往前走一步
            }

            // 更新最长路径
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
}

// test
const nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums));
