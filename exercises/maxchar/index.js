// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const MustUseChar = {};
    let max = 0;
    let maxChars = '';

    for (let char of str) {
        if (MustUseChar[char]) {
            MustUseChar[char]++;
        } else {
            MustUseChar[char] = 1;
        }
    }

    for (let char in str) {
        if (MustUseChar[char] > max) {
            max = MustUseChar[char];
            maxChars = char;
        }
    }
        return MustUseChar;
}
console.log(maxChar("Hello there"));
