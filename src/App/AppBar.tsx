import React from "react";
import styled, { css } from "styled-components";
import { textAlignCenter } from "../shared/styles";

const Logo = styled.div`
  font-size: 1.5em;
  text-shadow: 0px 0px 30px red;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 1fr 180px;
  grid-gap: 20px
  margin-bottom: 40px;
`;

const ControlButtonElem: any = styled.div`
  cursor: pointer;
  ${textAlignCenter}
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
      <ControlButton active name="Signin" />
    </Bar>
  );
};

export default AppBar;
