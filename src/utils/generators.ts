import { randomInt, randomElementFromArray, nRandomElementsFromArray } from "@/utils/randomizers";

export const generateRandomPlayer = (armor = [], weapons = [], equipement = [], minEqElements = 1, maxEqElements = 8) => {
    armor = armor ? armor : [];
    weapons = weapons ? weapons : [];
    equipement = equipement ? equipement : [];
    minEqElements = minEqElements ? minEqElements : 1;
    maxEqElements = maxEqElements ? maxEqElements : 8;

    let playerEquipement = equipement?.length > 0 ? nRandomElementsFromArray(equipement, randomInt(minEqElements, maxEqElements)) : ["-"];

    return {
        str: randomInt(-3, 3),
        agl: randomInt(-3, 3),
        prs: randomInt(-3, 3),
        tgh: randomInt(-3, 3),
        hp: randomInt(1, 10),
        omens: randomInt(1, 2),
        weapon: randomElementFromArray(weapons),
        armor: randomElementFromArray(armor),
        silver: randomInt(11, 66),
        equipement: playerEquipement as string[],
    };
};
