import { css } from "styled-components";

//mobile responsive
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};
