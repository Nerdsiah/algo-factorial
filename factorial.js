function factorial(num) {
    let answer = 1;

    while (num >= 2) {
        answer *= num;
        num -= 1;
    }
    return answer;
}

module.exports = factorial;
