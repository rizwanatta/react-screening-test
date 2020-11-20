import styled from "styled-components";
import { lightBlueBackground } from "../shared/styles";

export const Tile = styled.div`
  padding: 10px;
  ${lightBlueBackground}
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px #5fff17;
  }
`;
