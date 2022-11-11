import { styled } from "@mui/material/styles";

export const StyledCategorys = styled("div")`
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 25px;
        .category{
            border: solid 1px ${props => props.theme.palette.primary.main};
            border-radius: ${props => props.theme.shape.borderRadius};
            padding: 7px 12px;
            background-color: ${props => props.theme.palette.primary.light}97;
            cursor: pointer;
            transition: 0.3s;
            &.selected{
                background: ${props => props.theme.palette.background.default};
                border: solid 1px ${props => props.theme.palette.secondary.main};
            }

            p{
                font-size: 1.1rem;
                text-transform: capitalize;
                font-weight: 500;
                color: ${props => props.theme.palette.text.primary};
                margin: 0;
            }
        }
        
`