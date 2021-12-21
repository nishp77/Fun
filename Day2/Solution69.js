/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    let low = 1;
    let high = x;

    if (x < 2) {
        return x;
    }

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid === x) {
            return mid;
        }

        if (mid * mid > x) {
            high = mid;
        }
        else {
            low = mid + 1;
        }

    }

    return low - 1;

};

console.log(mySqrt(8));