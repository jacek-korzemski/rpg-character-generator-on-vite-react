import styled from "styled-components";

const Grid = styled.div`
  margin: 0 4px 8px 4px;
  padding: 16px;
  min-width: 750px;
  max-width: 750px;
  min-height: 1080px;
  max-height: 1080px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
  grid-template-areas:
    ". ."
    ". .";
  width: 100%;
  height: 100%;
`;

export default Grid;