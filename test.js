import {fromDollarToYen,fromEuroToDollar,fromYenToPound} from "app.js";


test(`return the amount of usd to yen`, () => {
    let yens = fromDollarToYen(100);
    expect(yens).toBe(15348);
});

test(`return the amount of euro to dollar`, () => {
    let dollar = fromEuroToDollar(100);
    expect(dollar).toBe(120);
});

test(`return the amount of yen to pound`, () => {
    let pound = fromYenToPound(100);
    expect(pound).toBe();
});