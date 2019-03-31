// --- Directions
// Given a string, return a new string with the reversed order of characters

// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION - 1: using built in functions
    function reverse(str) {
        let arr = str.split('').reverse().join(' ');
            return arr;
    }
    console.log(reverse('Programming'));