/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring  (s) {

    let map = new Map();
    let max = 0;
    let j = 0;
    let i = 0;


    while(i < s.length) {
        while(map.has(s.charAt(i)))
        {
            map.delete(s.charAt(j++));
        }
        map.set(s.charAt(i),i);
        max = Math.max(max, i-j+1);

        i++;
    }

    return max;

}

console.log(lengthOfLongestSubstring("abcabcbb"));
