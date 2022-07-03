const getCalculator = require('../calculator');

/**
 * Tests were check with the simple tax caclulator on the ATO website and superannuation caclulator:
 * https://www.ato.gov.au/Calculators-and-tools/Host/?anchor=STC&anchor=STC#STC/questions
 * https://moneysmart.gov.au/grow-your-super/employer-contributions-calculator
 * 
 * Rounding is made to the nearest cent, there were some tests that indicated rounding in either direction,
 * however based on further research I have decided to use normal rounding:
 * https://community.ato.gov.au/s/question/a0J9s0000001IRp/p00047215
 * https://community.ato.gov.au/s/question/a0J9s0000001IG3/p00046485
 * 
 */

describe("Tax Calculator", () => {
    describe("Invalid Input Tests", () => {
        // Can be used to display feedback to the user when they are completing the form for validation.
        test("Test negative number", () => {
            expect(getCalculator.caclulateTax(-100)).toBe(-1);
        });
        test("Test string", () => {
            expect(getCalculator.caclulateTax('100')).toBe(-1);
        });
        test("Test string", () => {
            expect(getCalculator.caclulateTax('hi')).toBe(-1);
        });
        test("No input", () => {
            // Number is so big in js that it is infinity
            expect(getCalculator.caclulateTax()).toBe(-1);
        });
    });
    
    describe("First Bracket Tests", () => {
        test("Test min", () => {
            expect(getCalculator.caclulateTax(0)).toBe(0);
        });
        test("Test random number", () => {
            expect(getCalculator.caclulateTax(1234)).toBe(0);
        });
        test("Test random number", () => {
            expect(getCalculator.caclulateTax(17843)).toBe(0);
        });
        test("Test max", () => {
            expect(getCalculator.caclulateTax(18200)).toBe(0);
        });
    })
    
    describe("Second Bracket Tests", () => {
        test("Test random number between min and max", () => {
            expect(getCalculator.caclulateTax(34000)).toBe(3002);
        });
        test("Test max", () => {
            expect(getCalculator.caclulateTax(37000)).toBe(3572);
        });
    })
    
    describe("Third Bracket Tests", () => {
        test("Test random number between min and max", () => {
            // This reminded me to round the number  to two decimal places
            expect(getCalculator.caclulateTax(86495)).toBe(19657.88);
        });
        test("Test random number between min and max", () => {
            expect(getCalculator.caclulateTax(45000.45)).toBe(6172);
        });
        test("Test max", () => {
            expect(getCalculator.caclulateTax(90000)).toBe(20797);
        });
    })
    
    describe("Fourth Bracket Tests", () => {
        test("Test random number between min and max", () => {
            // Slight discrepancy between this number and another test 86,495
            // when using the tax calculator, I have chosen to round to the nearest
            // cent when determining tax
            expect(getCalculator.caclulateTax(145000.95)).toBe(41147.37);
        });
        test("Test random number between min and max", () => {
            expect(getCalculator.caclulateTax(95000)).toBe(22647);
        });
        test("Test max", () => {
            expect(getCalculator.caclulateTax(180000)).toBe(54097);
        });
    })
    
    describe("Fifth Bracket Tests", () => {
        test("Test random number between min and max", () => {
            expect(getCalculator.caclulateTax(1000000)).toBe(423097.00);
        });
        test("Test random number between min and max", () => {
            expect(getCalculator.caclulateTax(1000000000)).toBe(449973097);
        });
        test("Test max", () => {
            // Number is so big in js that it is infinity, very unlikely this value
            // is ever entered since we would have input restrictions on the form.
            expect(getCalculator.caclulateTax(Number.MAX_VALUE)).toBe(Infinity);
        });
        test("Test infinity", () => {
            expect(getCalculator.caclulateTax(Infinity)).toBe(undefined);
        });
    })
})

// This doesn't need to be tested as much as the tax calculator since this is a simpler function.
describe("Test Superannuation Calculator", () => {
    // Similar tests for tax calculator can be reused here.
    describe("Invalid Input Tests", () => {
        // Can be used to display feedback to the user when they are completing the form for validation.
        test("Test negative number", () => {
            expect(getCalculator.caclulateSuperannuation(-100)).toBe(-1);
        });
        test("Test string", () => {
            expect(getCalculator.caclulateSuperannuation('100')).toBe(-1);
        });
        test("Test string", () => {
            expect(getCalculator.caclulateSuperannuation('hi')).toBe(-1);
        });
        test("No input", () => {
            // Number is so big in js that it is infinity
            expect(getCalculator.caclulateSuperannuation()).toBe(-1);
        });
    });

    describe("General tests", () => {
        test("Test round up", () => {
            // Number is so big in js that it is infinity
            expect(getCalculator.caclulateSuperannuation(100)).toBe(11);
        });
        test("Test round down", () => {
            // Number is so big in js that it is infinity
            expect(getCalculator.caclulateSuperannuation(90)).toBe(9);
        });
        test("Test random number", () => {
            // Number is so big in js that it is infinity
            expect(getCalculator.caclulateSuperannuation(100000)).toBe(10500);
        });
    });
});

