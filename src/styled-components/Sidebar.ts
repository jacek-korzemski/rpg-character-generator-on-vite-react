import styled from "styled-components";

const Sidebar = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: white;
    transition: all 0.3s;
    transform: ${(props: {open: boolean}) => (props.open ? "translateX(0)" : "translateX(-301px)")};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    h1,
    h2,
    h3 {
        margin: 0;
    }
    .box-list {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: flex-start;
    }
`;

export default Sidebar;
