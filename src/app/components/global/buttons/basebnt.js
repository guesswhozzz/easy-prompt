import styled from "styled-components";

export const BaseButton = styled.button`
  font-family: "JetBrains", "monospace";
  font-size: 1.2rem;
  font-weight: bold;
  padding: 2px 5px;
  border-bottom: 4px double black;
  margin-right: 4px;
  &:hover {
    background: gray;
  }
`;

export const LineButton = styled(BaseButton)`
  cursor: ${(props) => (props.flag ? "default" : "pointer")};
  color: ${(props) => (props.flag ? "gray" : "black")};
  &:hover {
    background: ${(props) => (props.flag ? "none" : "gray")};
  }
`;