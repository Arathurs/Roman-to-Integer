const romanToInt = s => {
    let lastRoman = '',
        count = 0;
    for(let i = 0; i < s.length; i++) {
        const curr = s[i];
        if ((curr === 'V' || curr === 'X') && lastRoman === 'I') {
            if (curr === 'V') {
                count = count + 3;
            } else {
                count = count + 8;
            }
        } else if ((curr === 'L' || curr === 'C') && lastRoman === 'X') {
            
            if (curr === 'L') {
                count = count + 30;
            } else {
                count = count + 80;
            }
        } else if ((curr === 'D' || curr === 'M') && lastRoman === 'C') {
            if (curr === 'D') {
                count = count + 300;
            } else {
                count = count + 800;
            }
        } else {
            if(curr === 'I') {
                count++;     
            } else if(curr === 'V') {
                count = count + 5;     
            } else if(curr === 'X') {
                count = count + 10;     
            } else if(curr === 'L') {
                count = count + 50;     
            } else if(curr === 'C') {
                count = count + 100;     
            } else if(curr === 'D') {
                count = count + 500;     
            } else if(curr === 'M') {
                count = count + 1000;     
            }       
        }
        lastRoman = curr;
    }
    return count;
};