import styled from "styled-components"
import {FormControl} from "../FormControl";

type PanelHorizontalProps = {
    maxWidth?: number;
}

const SimplePanelHorizontal= styled.div<Partial<PanelHorizontalProps>>`
  display: flex;
  align-items: stretch;
  width: ${(p: Partial<PanelHorizontalProps>) => p.maxWidth ? `${p.maxWidth}%` : '100%'};
`;

const PanelHorizontal = styled.div<Partial<PanelHorizontalProps>>`
  display: flex;
  align-items: stretch;
  column-gap: 20px;
  width: ${(p: Partial<PanelHorizontalProps>) => p.maxWidth ? `${p.maxWidth}%` : '100%'};

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }

  ${FormControl}.phone-number {
    display: flex;
    align-items: center;

    span{
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }

  .postal-currency{
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
  }
`;

export {
    PanelHorizontal,
    SimplePanelHorizontal
}
