import { styled } from "@mui/material/styles";

export const StylePage = styled("div")`
  display: flex;
  width: 100%;
  padding: 0 30px 30px;
  .decoration {
    background-color: ${(props) => props.theme.palette.secondary.main}c5;
    width: clamp(260px, 31vw, 330px);
    height: clamp(260px, 31vw, 330px);
    border-radius: 31000px;
    filter: blur(20px);
    bottom: -50px;
    right: -50px;
  }
  h2 {
    font-weight: 600;
    font-size: 1.8rem;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
  }
`;
