import styled from "styled-components";

const Divider = styled.hr`
  height: .5px;
  width: 100%;
  border: none;
  margin-top: 35px;
  margin-bottom: 15px;
  background-color: ${({theme}) => theme.secondaryColor};
`;
export {
    Divider
}
