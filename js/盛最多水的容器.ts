const maxArea(height: number[]): number => {
    // 双指针
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) { // 直到左右指针相遇
        // 计算当前面积
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        // 更新最大面积
        max = Math.max(max, currentArea);

        // 移动较短的指针
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

export {};