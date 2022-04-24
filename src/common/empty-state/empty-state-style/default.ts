import styled from "styled-components";

const EmptyWrapper = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: center;
  margin-left: 1em;
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: left;

  span {
    margin-bottom: 1em;
    text-align: left;
    line-height: 20px;
  }

  .little-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h4 {
      font-weight: bold;
      margin: .5em 0 0 0;
    }
  }

  a {
    cursor: pointer;
  }
`;

export {
    EmptyWrapper
}