const romanToInt = s => {
    // Save the current roman numeral to c and the previous roman numeral in r
    // The accumulating and final integer value will be saved and returned as i
    // A multiplier to be dynamically determined will be saved in m
    let c,
        r = '',
        i = 0,
        m;
    for(let k = 0; k < s.length; k++) {
        c= s[k];
        if ((c === 'V' || c === 'X') && r === 'I' 
        ||  (c === 'L' || c === 'C') && r === 'X'
        ||  (c === 'D' || c === 'M') && r === 'C') {
            // Here the multiplier is determined in an instance where substraction occurs 
            m = c === 'V' || c === 'X' ? 1 : c === 'L' || c === 'C' ? 10 : 100;
            if (c === 'V' ||  c === 'L' ||  c === 'D') {
                // Due to the multiplier the one line of code below can be used  
                // to calculate the integer value for multiple roman numberals
                i = i + 3 * m;
            } else {
            
                i = i + 8 * m;
            }
        } else {
            // Here the multiplier is determined in an instance where addition occurs 
            m = c === 'I' || c === 'V' ? 1 : c === 'X' || c === 'L' ? 10 : c === 'C' || c === 'D' ? 100 : 1000;
            if (c === 'I' ||  c === 'X' ||  c === 'C' ||  c === 'M') {
                i = i + 1 * m;
            } else {
                i = i + 5 * m;
            }
        }
        r = c;
    }
    return i;
};