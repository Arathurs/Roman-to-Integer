const romanToInt = s => {
    let lastRoman = '',
        count = 0;
    for(let i = 0; i < s.length; i++) {
        const curr = s[i];
        if ((curr === 'V' || curr === 'X') && lastRoman === 'I') {
            count = curr === 'V' ? count + 3 : count + 8;  
        } else if ((curr === 'L' || curr === 'C') && lastRoman === 'X') {
            count = curr === 'L' ? count + 30 : count + 80;  
        } else if ((curr === 'D' || curr === 'M') && lastRoman === 'C') {
            count = curr === 'D' ? count + 300 : count + 800; 
        } else {
            count = curr === 'I' ? ++count 
                  : curr === 'V' ? count + 5 
                  : curr === 'X' ? count + 10 
                  : curr === 'L' ? count + 50 
                  : curr === 'C' ? count + 100 
                  : curr === 'D' ? count + 500 
                  : count + 1000;
        }
        lastRoman = curr;
    }
    return count;
};