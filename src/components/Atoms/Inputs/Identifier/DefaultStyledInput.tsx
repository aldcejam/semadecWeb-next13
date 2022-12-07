import { styled } from "@mui/material";

export const DefaultStyledInput = styled("span")`
  .MuiInputAdornment-root svg, .MuiTypography-root{
    position: relative;
    z-index: 3;
  }
  
  /* error */
  .css-137ewq7-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline{
    border-color: ${({ theme }) => theme.palette.error.main} !important;
  }
  .MuiFormControl-root {
    width: 100%;
    .MuiOutlinedInput-root {
      background-color: ${({theme})=> theme.palette.background.paper};
      filter: grayscale(100%);
      & fieldset {
            border: solid 2px ${(props) => props.theme.palette.primary.dark};
            border-radius: ${(props) => props.theme.shape.borderRadius};
        }
        &.Mui-focused fieldset {
            border: solid 2px ${(props) => props.theme.palette.primary.main};
        }
    }
}
`;
