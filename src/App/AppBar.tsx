import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
  text-shadow: 0px 0px 30px red;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 100px 100px;
`;

const ControlButtonElem: any = styled.div`
  cursor: pointer;
  ${(props: ControlButtonI) =>
    props.active &&
    css`
      text-shadow: 0px 0px 10px #03ff03;
    `}
`;

interface ControlButtonI {
  name: string;
  active: boolean;
}

const ControlButton: any = (props: ControlButtonI) => {
  return (
    <ControlButtonElem active={props.active}>{props.name}</ControlButtonElem>
  );
};
const AppBar = () => {
  return (
    <Bar>
      <Logo>ArticleSorter</Logo>
      <div />
      <ControlButton active name="About us" />
      <ControlButton active name="Signin" />
    </Bar>
  );
};

export default AppBar;
