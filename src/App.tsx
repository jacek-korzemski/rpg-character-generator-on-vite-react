import React, { createContext, useState } from "react";
import Grid from "~/styled-components/Grid";
import Configuration from "~/components/Configuration";
import CharacterSheet from "~/components/CharacterSheet";
import ReactToPdf from "react-to-pdf";
import { armor as initialArmor } from "~/data/armor";
import { weapons as initiialWeapons } from "~/data/weapons";
import { equipement as initiialEquipement } from "~/data/equipement";
import { generateRandomPlayer } from "~/utils/generators";

interface AppContextInterface {
    armor?: string[];
    weapons?: string[];
    equipement?: string[];
    setArmor: (elem: string[]) => void;
    setWeapons: (elem: string[]) => void;
    setEquipement: (elem: string[]) => void;
}

export const AppContext = createContext<AppContextInterface>({
    armor: [],
    weapons: [],
    equipement: [],
    setArmor: () => null,
    setWeapons: () => null,
    setEquipement: () => null,
});

const App: React.FC = () => {
    const ref = React.createRef<HTMLDivElement>();
    const [armor, setArmor] = useState([...initialArmor]);
    const [weapons, setWeapons] = useState([...initiialWeapons]);
    const [equipement, setEquipement] = useState([...initiialEquipement]);

    return (
        <AppContext.Provider
            value={{
                armor: armor,
                weapons: weapons,
                equipement: equipement,
                setArmor: setArmor,
                setWeapons: setWeapons,
                setEquipement: setEquipement,
            }}
        >
            <div
                style={{
                    margin: "0 0 0 50%",
                    width: "fit-content",
                    position: "relative",
                    height: "100%",
                }}
            >
                <div ref={ref}>
                    <Grid>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor as [], weapons as [], equipement as [], 3, 6)} />
                        </div>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor as [], weapons as [], equipement as [], 3, 6)} />
                        </div>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor as [], weapons as [], equipement as [], 3, 6)} />
                        </div>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor as [], weapons as [], equipement as [], 3, 6)} />
                        </div>
                    </Grid>
                </div>
            </div>
            <Configuration open={true}>
                <ReactToPdf targetRef={ref} filename="4-more-to-kill.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
                </ReactToPdf>
                <button onClick={() => setEquipement([...equipement])}>Refresh data</button>
            </Configuration>
        </AppContext.Provider>
    );
};

export default App;
