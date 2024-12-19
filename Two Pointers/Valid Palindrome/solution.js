/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let isValid = true;
    for(let i=0;i<Math.floor(s.length/2);i++){
        if(s[i]!=s[s.length-1-i]){
            isValid=false;
            break;
        }
    }
    return isValid;
};


/**
 * Time Complexity (Big-O): O(n)
 * Space Complexity: O(n)
 * Algorithm: Two Pointers
*/
