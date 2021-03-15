module.exports = function check(str, bracketsConfig) {
    let i = 0;
    let n = 0;
    let m = 0;
    let k = 0;
    while (i < str.length) {
        if (str[i] == '(') {
            n = n + 1;
        } else if (str[i] == ')') {
            n = n - 1;
            if (n < 0) {
                return false;
            }
        }

        i++;
    }

    while (i < str.length) {
        if (str[i] == '[') {
            m = m + 1;
        } else if (str[i] == ']') {
            m = m - 1;
            if (m < 0) {
                return false;
            }
        }

        i++;
    }

    while (i < str.length) {
        if (str[i] == '|') {
            k = k + 1;
        } else if (str[i] == '}') {
            k = k - 1;
            if (k < 0) {
                return false;
            }
        }

        i++;
    }

    if (n == 0 && m == 0 && k == 0) {
        return true;
    } else if (n != 0 || m != 0 || k != 0) {
        return false;
    }
}
