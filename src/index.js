const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let translate = '';
    let string10;
    function getMorseItem(stringBit) {
        let morseItem = '';
        let twoBits;  
        for (let i = 9; i >= 0; i = i - 2) {          
          twoBits = stringBit.slice(i - 1, i + 1);          
          switch (true) {
            case(twoBits === '11'): morseItem = '-' + morseItem;
            break;
            case(twoBits === '10'): morseItem = '.' + morseItem;
            break;
            default : return morseItem;
          }
        }
        return morseItem;
    }

    for (let i = 0; i <= expr.length - 10;  i = i + 10) {
        string10 = expr.slice(i, i + 10);
        translate += (string10.includes('*')) ? ' ' : MORSE_TABLE[getMorseItem(string10)];
    }
    return translate;
}

module.exports = {
    decode
}
