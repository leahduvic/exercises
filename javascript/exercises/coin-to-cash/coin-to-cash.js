const piggyBank = {
    "quarters": [252, 0.25],
    "nickels": [300, 0.05],
    "dimes": [56, 0.10],
    "pennies": [802, 0.01]
}

let dollarAmount = 0

    for (let key in piggyBank) {
        let value = piggyBank[key];
        dollarAmount = value[0]*value[1]
        console.log(dollarAmount)
    }
