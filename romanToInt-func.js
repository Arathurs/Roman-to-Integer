const romanToInt = s => {
    let r = '',
        i = 0,
        c,
        m;
    function addS() {
        m = c === 'V' || c === 'X' ? 1 : c === 'L' || c === 'C' ? 10 : 100;
        if (c === 'V' ||  c === 'L' ||  c === 'D') {
            i = i + 3 * m;
        } else {
            i = i + 8 * m;
        }
    }
    function add() {
        m = c === 'I' || c === 'V' ? 1 : c === 'X' || c === 'L' ? 10 : c === 'C' || c === 'D' ? 100 : 1000;
        if (c === 'I' || c === 'X' || c === 'C' ||  c === 'M') {
            i = i + 1 * m;
        } else {
            i = i + 5 * m;
        }
    }
    for(let k = 0; k < s.length; k++) {
        c= s[k];
        if ((c === 'V' || c === 'X') && r === 'I' 
        ||  (c === 'L' || c === 'C') && r === 'X'
        ||  (c === 'D' || c === 'M') && r === 'C') {
            addS();
        } else {
            add();
        }
        r = c;
    }
    return i;
};