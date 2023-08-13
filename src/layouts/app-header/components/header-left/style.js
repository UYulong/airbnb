import { styled } from "styled-components";

export const HeaderLeftWrapper = styled.div`
flex: 1;

.logo {
  color: ${props => props.theme.color.primaryColor};
  margin-left: 25px;
}
`