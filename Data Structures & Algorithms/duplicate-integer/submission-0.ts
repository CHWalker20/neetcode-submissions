class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hasDupes = nums.length !== new Set(nums).size;

        return hasDupes;
    }
}
