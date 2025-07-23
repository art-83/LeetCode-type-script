// 01. Two Sum
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    return [];
}

// 04. Median of Two Sorted Arrays
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    var nums3: number[] = nums1.concat(nums2);
    nums3.sort((a, b) => a - b);

    if(nums3.length%2 != 0) {
        return nums3[Math.trunc(nums3.length / 2)];
    }

    var sum = nums3[nums3.length/2] + (nums3[nums3.length/2 - 1]);

    return sum/2;
}

// 09. Palindrome Number
function isPalindrome(x: number): boolean {
    if(x < 0) {
        return false;
    }
    if(x.toString() != x.toString().split('').reverse().join('')) {
        return false;
    }
    return true;
}


// 28. Find the Index of the First Occurrence in a String
function strStr(haystack: string, needle: string): number {
    var l: number = 0, r = 0, index = 0, count = 0;

    while(r < haystack.length) {
        if(haystack.charAt(r) == needle.charAt(index)) {
            count++;
            r++;    
            index++;
        } else {
            count = 0;
            l++;
            r = l;
            index = 0;
        }
        if(count == needle.length) {
            return l;
        }
    }
    return -1;
}

console.log(strStr("sadbutsad", "sad"));