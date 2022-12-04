import { styled } from "@mui/material";

export const StyledLoginPresentation = styled("div")`
    flex-basis: 45%; 
    display: grid;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.light}a2;
    border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
    border-bottom-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
    ${({ theme }) => theme.breakpoints.up('md')} {
        border: ${({ theme }) => theme.shape.borderRadius}px;
    }
    .splide{
        margin-top: -100px;
        .splide__list{
            background-color: transparent;
            margin-right: 0px !important;
            .item-slide{
                display: flex;
            justify-content: center;
            background-color: transparent !important;
        }
    }
    .splide__pagination__page.is-active{
        background-color: ${({ theme }) => theme.palette.primary.main} !important;
    }
    .splide__pagination__page{
        background-color: ${({ theme }) => theme.palette.primary.dark}a1 ;
        border-radius: 100px;
        width: 15px;
        height: 7px;
        &:hover{
            background-color: ${({ theme }) => theme.palette.secondary.main} !important;
        }
    }
    }
    `