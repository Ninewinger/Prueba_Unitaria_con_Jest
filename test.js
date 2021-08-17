
test(`return the amount of usd to yen`, () => {
    const { fromDollarToYen } = require('./app.js')
    let yens = Math.floor(fromDollarToYen(100));
    expect(yens).toBe(10658);
});

test(`return the amount of euro to dollar`, () => {
    const { fromEuroToDollar } = require('./app.js')
    let dollar = fromEuroToDollar(100);
    expect(dollar).toBe(120);
});

test(`return the amount of yen to pound`, () => {
    const { fromYenToPound } = require('./app.js')
    let pound = Math.floor(fromYenToPound(100));
    expect(pound).toBe(0);
});