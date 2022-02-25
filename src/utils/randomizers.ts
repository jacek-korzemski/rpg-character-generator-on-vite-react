const randomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomElementFromArray = (array: string[]) => {
    if (array.length === 0) {
        return "-";
    }
    return array[Math.floor(Math.random() * array.length)];
};

const nRandomElementsFromArray = (array: string[], n: number) => {
    if (!array) {
        return "-";
    }
    return [...array].sort(() => 0.5 - Math.random()).slice(0, n);
};

export { randomInt, randomElementFromArray, nRandomElementsFromArray };
