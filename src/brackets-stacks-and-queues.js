function getClosingCharacter(char) {
    if (char === '{') return '}';
    if (char === '(') return ')';
    if (char === '[') return ']';
}

function isOpeningChar(char) {
    return char === '{' || char === '[' || char === '(';
}

function isClosingChar(char) {
    return char === '}' || char === ']' || char === ')';
}

function solution(S) {
    if (S.length === 0) return 1;

    var stackString = '';

    for (var i = 0; i < S.length; i++) {
        var comparedChar = S[i];
        if (isOpeningChar(comparedChar)) {
            stackString = stackString + getClosingCharacter(comparedChar);

        } else if (isClosingChar(comparedChar)) {
            if (comparedChar === stackString[stackString.length - 1]) {
                // remove last character
                stackString = stackString.slice(0, -1);
            } else {
                // console.log('invalid sequence')
                return 0;
            }
        } else {
            // console.log('invalid char')
            return 0;
        }
    }

    if (stackString.length === 0) {
        return 1;
    } else {
        return 0;
    }
}
