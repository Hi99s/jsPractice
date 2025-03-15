const testArr = [2, 7, 11, 15];
const target = 9;

const twoSum = (arr: number[], target: number): number[] => {
    const map = new Map<number, number>(); // 记录数字和下标

    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        const complement = target - item; // 理想搭档

        // 查询登记薄 看看有没有搭档
        if (map.has(complement)) {
            // 找到了搭档 可以结束了
            return [map.get(complement)!, index];
        }

        // 存入 [item, index]
        map.set(item, index);
    }

    // 如果没有找到解（根据题目假设不会发生）
    throw new Error("No two sum solution");
};

export {}