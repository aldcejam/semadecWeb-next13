import { styled } from "@mui/material";

export const StyledDisplayDecorationLogin = styled("div")`
  .splide {
    margin-top: -100px;
    .splide__list {
      background-color: transparent;
      margin-right: 0px !important;
      .item-slide {
        display: flex;
        justify-content: center;
        background-color: transparent !important;
      }
    }
    .splide__pagination__page.is-active {
      background-color: ${({ theme }) => theme.palette.primary.main} !important;
    }
    .splide__pagination__page {
      background-color: ${({ theme }) => theme.palette.primary.dark}a1;
      border-radius: 100px;
      width: 15px;
      height: 7px;
      &:hover {
        background-color: ${({ theme }) =>
          theme.palette.secondary.main} !important;
      }
    }
  }
`;
