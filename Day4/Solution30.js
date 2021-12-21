/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
    let map = new Map();
    let j = 0;
    let wordLength = words[0].length;
    let temp = "";

    for(let i=0;i<s.length;i+=wordLength)
    {
        temp = s.substring(i,wordLength);
        
        while(map.has(temp))
        {
            map.delete(temp);
            j += wordLength;
        }
        
    }
}

console.log()
