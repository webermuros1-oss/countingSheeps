let herd1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]
let herd2 = [false, false, false]

function countSheeps(list) {
    let numberSheep = 0;
    for (let sheep = 0; sheep < list.length; sheep++) {
        if (list[sheep] === true) { numberSheep++ }
    }
    if (numberSheep > 0) {
        return ("There are " + numberSheep + " sheep in total");
    }
    if (numberSheep === 0) {
        return ("UPS!!! Wolfs eaten Sheeps");
    }
}

console.log(countSheeps(herd1))
console.log(countSheeps(herd2))