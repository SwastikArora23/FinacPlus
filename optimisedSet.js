function optimizedUnits(units, maxUnits, maxValue) {
    function findMinUnits(value, units) {
        let remaining = value;
        let count = 0;
        units.sort((a, b) => b - a);
        for (let unit of units) {
            while (remaining >= unit) {
                remaining -= unit;
                count++;
            }
        }
        return count;
    }
    let totalUnitsUsed = 0;
    for (let i = 1; i <= maxValue; i++) {
        totalUnitsUsed += findMinUnits(i, units);
    }
    const averageUnitsUsed = totalUnitsUsed / maxValue;
    return { averageUnitsUsed, totalUnitsUsed };
}

const units = [1, 2, 5, 10, 20, 50];
const maxUnits = 6;
const maxValue = 99;

const result = optimizedUnits(units, maxUnits, maxValue);
console.log(`Average units used: ${result.averageUnitsUsed.toFixed(2)}`);
