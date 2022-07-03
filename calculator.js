// ===== Annual Tax =====

// Tax Table
var taxTable = [
    { min: 0, max: 18200, percentage: 0 / 100, baseAmount: 0 },
    { min: 18200, max: 37000, percentage: 19 / 100, baseAmount: 0 },
    { min: 37000, max: 90000, percentage: 32.5 / 100, baseAmount: 3572 },
    { min: 90000, max: 180000, percentage: 37 / 100, baseAmount: 20797 },
    { min: 180000, max: Infinity, percentage: 45 / 100, baseAmount: 54097 }
];

function caclulateTax(salary) {

    // Check for invalid inputs
    if(typeof(salary) != 'number' || salary < 0)
        return -1;

    // Round inputs with decimal places
    salary = Math.round(salary);

    for (var x = 0; x < taxTable.length; x++) {

        var bracket = taxTable[x];

        if (salary < bracket.max) {

            // Base Amount + (Salary - Bracket Min) * Bracket Percentage
            var taxAmount = bracket.baseAmount + (salary - bracket.min) * bracket.percentage;

            // Round tax amount to two decimal places
            return Math.round(taxAmount * 100) / 100;

        }

    }

}

// ===== Annual Superannuation =====

var superAnnuationPercentage = 10.5 / 100;

function caclulateSuperannuation(salary) {

    // Check for invalid inputs
    if(typeof(salary) != 'number' || salary < 0)
        return -1;

    return Math.round(salary * superAnnuationPercentage);
}

module.exports = {
    caclulateTax,
    caclulateSuperannuation
};



