import styled from "styled-components";

type InnerPanelVProps = {
    paddingLeft?: number;
    doubleWidth?: boolean;
}

const InnerPanelV = styled.div<Partial<InnerPanelVProps>>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${(props => props?.doubleWidth ? '800px' : '400px')};
  padding-left: ${(props => `${props.paddingLeft}px`)};
  
  h3{
    display: flex;
    align-items: center;
  }
`;

export {
    InnerPanelV
};
