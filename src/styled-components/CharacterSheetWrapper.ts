import styled from "styled-components";

const CharacterSheetWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    .character-name {
        margin: 4px 0;
        text-align: center;
    }
    .params {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 4px;
        .box {
            width: 80px;
            height: 80px;
            border: 1px solid black;
            position: relative;
            .name {
                position: absolute;
                bottom: 4px;
                font-size: 20px;
                left: 0px;
                width: 100%;
                border-top: 1px solid black;
                text-align: center;
                font-weight: bold;
                font-family: "Metal Mania", cursive;
            }
            .value {
                font-size: 24px;
                width: 100%;
                text-align: center;
                margin-top: 7px;
                color: rgba(0, 0, 0, 0.18);
            }
            .param {
                position: absolute;
                top: 0px;
                left: 4px;
                opacity: 0.2;
            }
            .line {
                position: absolute;
                width: 42px;
                height: 1px;
                background: black;
                transform: rotate(-45deg);
                top: 15px;
                left: -5px;
                opacity: 0.2;
            }
        }
    }

    .middle {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 4px;
        display: grid;
        grid-auto-columns: 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 0.7fr 1fr;
        gap: 0 0;
        grid-template-areas:
            ". ."
            ". .";
        width: calc(100% -8px);
        height: 160px;
        .health,
        .armor,
        .omens,
        .weapon {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .name {
                position: absolute;
                top: 4px;
                left: 0;
                font-size: 18px;
                width: 100%;
                text-align: center;
                font-family: "Metal Mania", cursive;
            }
        }
        .health {
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            .value {
                margin-top: 15px;
                font-size: 24px;
                color: rgba(0, 0, 0, 0.18);
            }
        }
        .omens {
            .value {
                margin-top: 15px;
                font-size: 24px;
                color: rgba(0, 0, 0, 0.18);
            }
        }
        .weapon {
            .value {
                margin-top: 14px;
                font-size: 16px;
                padding: 0 10px;
                text-align: center;
                color: rgba(0, 0, 0, 0.45);
            }
        }
        .armor {
            margin-top: -1px;
            margin-left: -1px;
            border-top: 1px solid black;
            border-left: 1px solid black;
            .value {
                margin-top: 14px;
                font-size: 16px;
                padding: 0 10px;
                text-align: center;
                color: rgba(0, 0, 0, 0.45);
            }
        }
    }
    .silver {
        margin-top: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        .name {
            font-family: "Metal Mania", cursive;
            font-size: 20px;
            margin-right: 10px;
        }
        .value {
            width: 60px;
            height: 24px;
            border: 1px solid black;
            padding-left: 15px;
            color: rgba(0, 0, 0, 0.45);
        }
    }
    .eq {
        padding-top: 35px;
        margin-top: 16px;
        padding-left: 8px;
        padding-right: 8px;
        position: relative;
        max-height: 100px;
        width: calc(100% - 16px);
        text-align: center;
        .name {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            font-family: "Metal Mania", cursive;
            margin: 0;
        }
    }
`;

export default CharacterSheetWrapper;
