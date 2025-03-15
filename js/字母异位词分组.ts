let testArr:string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (strs: string[]) => {
    // 创建一个map作为登记簿
    const map = new Map<string, string[]>();

    // 遍历每张 "扑克牌"
    strs.forEach((item) => {
        // 生成家族标签
        const sortedStr = item.split("").sort().join("");

        // 如果登记薄里已经有这个家族
        if (map.has(sortedStr)) {
            // 加到家族列表中
            map.get(sortedStr)!.push(item); // 非空断言
        } else {
            // 否则新建一个家族，放入第一张牌
            map.set(sortedStr, [item]);
        }
    });

    // 把所有家族列表取出来返回
    return Array.from(map.values());
};

console.log(groupAnagrams(testArr));

export {}
