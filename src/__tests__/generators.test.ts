import { generateRandomPlayer } from "@/utils/generators";
import { weapons } from "@/data/weapons";
import { equipement } from "@/data/equipement";
import { armor } from "@/data/armor";

/*
    TESTING:
    Function generating players and their stats
    @generateRandomPlayer()
*/

interface PlayerInterface {    
    str: number;
    agl: number;
    prs: number;
    tgh: number;
    hp: number;
    omens: number;
    weapon: string;
    armor: string;
    silver: number;
    equipement: string[];
}

var testPlayers: PlayerInterface[] = [];
for (let i = 0; i <= 100; i++) {
    let newPlayer = generateRandomPlayer(armor as [], weapons as [], equipement as [], 3, 6);
    testPlayers.push(newPlayer);
}

test("Should generate players with valid stats.", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        expect(testPlayers[i].str).toBeLessThanOrEqual(3);
        expect(testPlayers[i].str).toBeGreaterThanOrEqual(-3);
        expect(testPlayers[i].agl).toBeLessThanOrEqual(3);
        expect(testPlayers[i].agl).toBeGreaterThanOrEqual(-3);
        expect(testPlayers[i].tgh).toBeLessThanOrEqual(3);
        expect(testPlayers[i].tgh).toBeGreaterThanOrEqual(-3);
        expect(testPlayers[i].hp).toBeLessThanOrEqual(10);
        expect(testPlayers[i].hp).toBeGreaterThanOrEqual(1);
        expect(testPlayers[i].omens).toBeLessThanOrEqual(2);
        expect(testPlayers[i].omens).toBeGreaterThanOrEqual(1);
    }
});

test("Should generate players with valid items", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        expect(weapons).toContain(testPlayers[i].weapon);
        expect(armor).toContain(testPlayers[i].armor);
        for (let j = 0; j < testPlayers[i].equipement.length; j++) {
            expect(equipement).toContain(testPlayers[i].equipement[j]);
        }
    }
});

test("Should generate player without armor if no armor are given", () => {
    let newTestPlayers = [
        generateRandomPlayer([], weapons as [], equipement as [], 3, 6),
        generateRandomPlayer(undefined, weapons as [], equipement as [], 3, 6),
        generateRandomPlayer(),
    ];

    for (let i = 0; i < newTestPlayers.length; i++) {
        expect(newTestPlayers[i].armor).toBe("-");
    }
});

test("Should generate player without weapon if no weapons are given", () => {
    let newTestPlayers = [
        generateRandomPlayer(armor as [], [], equipement as [], 3, 6),
        generateRandomPlayer(armor as [], undefined, equipement as [], 3, 6),
        generateRandomPlayer(armor as []),
    ];

    for (let i = 0; i < newTestPlayers.length; i++) {
        expect(newTestPlayers[i].weapon).toBe("-");
    }
});

test("Should generate player without items if no equipement are given", () => {
    let newTestPlayers = [
        generateRandomPlayer(armor as [], weapons as [], [], 3, 6),
        generateRandomPlayer(armor as [], weapons as [], undefined, 3, 6),
        generateRandomPlayer(armor as [], weapons as []),
    ];

    for (let i = 0; i < newTestPlayers.length; i++) {
        expect(newTestPlayers[i].equipement[0]).toBe("-");
    }
});

test("Should generate players with no more than 6 and no less than 3 items", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        expect(testPlayers[i].equipement.length).toBeGreaterThanOrEqual(3);
        expect(testPlayers[i].equipement.length).toBeLessThanOrEqual(6);
    }
});

test("Should generate players with only items from given array", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        for (let j = 0; j < testPlayers[i].equipement.length; j++) {
            expect(equipement).toContain(testPlayers[i].equipement[j]);
        }
    }
});
