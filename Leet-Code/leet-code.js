// 01. Two Sum
function twoSum(nums, target) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
}
;
// 04. Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
    var nums3 = nums1.concat(nums2);
    nums3.sort(function (a, b) { return a - b; });
    if (nums3.length % 2 != 0) {
        return nums3[Math.trunc(nums3.length / 2)];
    }
    var sum = nums3[nums3.length / 2] + (nums3[nums3.length / 2 - 1]);
    return sum / 2;
}
;
