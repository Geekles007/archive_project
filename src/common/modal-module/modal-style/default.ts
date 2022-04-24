import styled from "styled-components";

const ModalContainer = styled.div`
  .bx--modal-container {
    //overflow-y: scroll;
  }

  .bx--modal-content, .bx--modal-container {
    overflow: visible;
  }

  .bx--modal-container--xs{
    max-height: none !important;
  }
  
  ._scrollable {
    max-height: 50vh;
    overflow-y: scroll !important;
  }
`;

export {
    ModalContainer
}
