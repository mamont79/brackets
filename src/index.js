module.exports = function check(str, bracketsConfig) {
    let arr = [...str];

    if (str.length % 2 !== 0) {
        return false
    } else {

        for (let i = 0; i < arr.length; i++) {
            bracketsConfig.forEach((symbol) => {
                if (arr[i] === symbol[0] && arr[i + 1] === symbol[1]) {
                    arr.splice(i, 2);
                    i = -1;
                }
            })
        }
        return arr.length === 0;

    }
}