import React, { useContext } from "react";
import Sidebar from "~/styled-components/Sidebar";
import ButtonSelect from "~/styled-components/ButtonSelect";
import { armor as initialArmor } from "~/data/armor";
import { weapons as initialWeapons } from "~/data/weapons";
import { equipement as initialEquipement } from "~/data/equipement";
import { AppContext } from "~/App";

const Configuration = (props) => {
    const app = useContext(AppContext);

    const toggleArmor = (elem) => {
        let oldArmor = app?.armor ? [...app.armor] : [];
        let newArmor: string[] = [];
        if (app?.armor?.includes(elem)) {
            newArmor = [...app.armor].filter((find) => {
                return find !== elem;
            });
        } else {
            newArmor = [...oldArmor, elem];
        }
        app.setArmor(newArmor);
    };

    const toggleWeapons = (elem) => {
        let oldWeapons = app?.weapons ? [...app.weapons] : [];
        let newWeapons: string[] = [];
        if (app?.weapons?.includes(elem)) {
            newWeapons = [...app.weapons].filter((find) => {
                return find !== elem;
            });
        } else {
            newWeapons = [...oldWeapons, elem];
        }
        app.setWeapons(newWeapons);
    };

    const toggleEquipement = (elem) => {
        let oldEquipement = app?.equipement ? [...app.equipement] : [];
        let newEquipement: string[] = [];
        if (app?.equipement?.includes(elem)) {
            newEquipement = [...app.equipement].filter((find) => {
                return find !== elem;
            });
        } else {
            newEquipement = [...oldEquipement, elem];
        }
        app.setEquipement(newEquipement);
    };

    const selectAllWeapons = (bool) => {
        if (bool) {
            app.setWeapons([...initialWeapons]);
        }
        if (!bool) {
            app.setWeapons([]);
        }
    };

    const selectAllArmor = (bool) => {
        if (bool) {
            app.setArmor([...initialArmor]);
        }
        if (!bool) {
            app.setArmor([]);
        }
    };

    const selectAllEquipement = (bool) => {
        if (bool) {
            app.setEquipement([...initialEquipement]);
        }
        if (!bool) {
            app.setEquipement([]);
        }
    };

    return (
        <Sidebar open={props.open}>
            <h2>Configuration</h2>
            <h3>Availible weapons</h3>
            <div className="box-list">
                <div style={{ display: "flex", width: "24%" }}>
                    <ButtonSelect
                        onClick={() => selectAllWeapons(true)}
                        selected={app?.weapons?.length === initialWeapons.length ? true : false}
                        style={{ width: "50%" }}
                    >
                        Select All
                    </ButtonSelect>
                    <ButtonSelect
                        onClick={() => selectAllWeapons(false)}
                        selected={app?.weapons?.length === 0 ? true : false}
                        style={{ width: "50%" }}
                    >
                        Deselect All
                    </ButtonSelect>
                </div>
                {initialWeapons.map((elem, index) => (
                    <ButtonSelect key={index} selected={app?.weapons?.includes(elem) ? true : false} onClick={() => toggleWeapons(elem)}>
                        {elem}
                    </ButtonSelect>
                ))}
            </div>
            <h3>Availible Armor</h3>
            <div className="box-list">
                <div style={{ display: "flex", width: "24%" }}>
                    <ButtonSelect
                        onClick={() => selectAllArmor(true)}
                        selected={app?.armor?.length === initialArmor.length ? true : false}
                        style={{ width: "50%" }}
                    >
                        Select All
                    </ButtonSelect>
                    <ButtonSelect
                        onClick={() => selectAllArmor(false)}
                        selected={app?.armor?.length === 0 ? true : false}
                        style={{ width: "50%" }}
                    >
                        Deselect All
                    </ButtonSelect>
                </div>
                {initialArmor.map((elem, index) => (
                    <ButtonSelect key={index} selected={app?.armor?.includes(elem) ? true : false} onClick={() => toggleArmor(elem)}>
                        {elem}
                    </ButtonSelect>
                ))}
            </div>
            <h3>Availible Equipement</h3>
            <div className="box-list">
                <div style={{ display: "flex", width: "24%" }}>
                    <ButtonSelect
                        onClick={() => selectAllEquipement(true)}
                        selected={app?.equipement?.length === initialEquipement.length ? true : false}
                        style={{ width: "50%" }}
                    >
                        Select All
                    </ButtonSelect>
                    <ButtonSelect
                        onClick={() => selectAllEquipement(false)}
                        selected={app?.equipement?.length === 0 ? true : false}
                        style={{ width: "50%" }}
                    >
                        Deselect All
                    </ButtonSelect>
                </div>
                {initialEquipement.map((elem, index) => (
                    <ButtonSelect
                        key={index}
                        selected={app?.equipement?.includes(elem) ? true : false}
                        onClick={() => toggleEquipement(elem)}
                    >
                        {elem}
                    </ButtonSelect>
                ))}
            </div>
            <h3>The magic button</h3>
            {props.children}
        </Sidebar>
    );
};

export default Configuration;
