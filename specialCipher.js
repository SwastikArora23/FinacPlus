function specialCipher(inputStr, rotation) {
    function caesarCipher(text, shift) {
        return text.split('').map(char => {
            if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
            } else if (char >= 'a' && char <= 'z') {
                return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            } else {
                return char;
            }
        }).join('');
    }

    function runLengthEncode(text) {
        if (!text) return '';
        let encoded = '';
        let count = 1;

        for (let i = 1; i < text.length; i++) {
            if (text[i] === text[i - 1]) {
                count++;
            } else {
                encoded += text[i - 1] + (count > 1 ? count : '');
                count = 1;
            }
        }
        encoded += text[text.length - 1] + (count > 1 ? count : '');
        return encoded;
    }
    const shiftedStr = caesarCipher(inputStr, rotation);
    const encodedStr = runLengthEncode(shiftedStr);
    return encodedStr;
}

const output = specialCipher("AABCCC", 3);
console.log(output);
