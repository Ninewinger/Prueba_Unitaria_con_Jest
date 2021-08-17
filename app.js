// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = (usd) => { 
    return usd*(1/1.2)*127.9 
}

let fromEuroToDollar = (eur) => {
    return eur*1.2 
}

let fromYenToPound = (yen) => { 
    return yen*(1/127.9)*0.8 
}

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};