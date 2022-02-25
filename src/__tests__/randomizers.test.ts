import { randomInt, randomElementFromArray, nRandomElementsFromArray } from "~/utils/randomizers";
import { weapons } from "~/data/weapons";

/*
    TESTING:
    Generating random values from provided range
    @randomInt(min, max);
*/

var arr: number[] = [];
for (let i = 0; i < 100000; i++) {
    arr.push(randomInt(-10, 10));
}
arr = [...new Set(arr)];
arr.sort();

test("Should generate number not higher than range", () => {
    expect(arr[arr.length - 1]).toBeLessThanOrEqual(10);
});

test("Should generate number not lesser than range", () => {
    expect(arr[0]).toBeGreaterThanOrEqual(-10);
});

test("Should generate at least one smallest number", () => {
    expect(arr).toContain(-10);
});

test("Generated numbers should be fairly random ", () => {
    let value = [...arr].reduce((partialSum, a) => partialSum + a, 0);
    let length = arr.length;
    expect(value / length).toBeGreaterThan(-1);
    expect(value / length).toBeLessThan(1);
});

test("Should generate at least one highest number", () => {
    expect(arr).toContain(10);
});

/*
    TESTING:
    Picking random value from provided array
    @randomElementFromArray(array);
*/

test('Should return "-" from an empty array', () => {
    expect(randomElementFromArray([])).toBe("-");
});

test("Should return only elements from provided array", () => {
    for (let i = 0; i < 100; i++) {
        expect(weapons).toContain(randomElementFromArray(weapons));
    }
});

/*
    TESTING:
    Picking n random values from provided array
    @nRandomElementsFromArray(array, n)
*/

test("Array should contain exactly 5 items", () => {
    expect(nRandomElementsFromArray(weapons, 5).length).toBe(5);
});

test("Array should contain exactly 3 items from provided array", () => {
    let testArray = nRandomElementsFromArray(weapons, 3);
    let pass = true;

    for (let i = 0; i < testArray.length; i++) {
        if (!weapons.includes(testArray[i])) {
            pass = false;
        }
    }

    expect(pass).toBe(true);
});
