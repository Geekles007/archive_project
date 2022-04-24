import styled from "styled-components"
import {InnerPanelV} from "../InnerPanelV";

const PanelVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({theme}) => theme.bgColor};
  width: 100vw;
  height: 100%;
  position: relative;
  
  &.padded {
    padding: 2em;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  ${InnerPanelV} {
    margin-bottom: 20px;
  }
`;

export {
    PanelVertical
}
