import { styled } from "@mui/material";

export const StylePage = styled("div")`
    display: flex;
    justify-content: center;
    .container{
        z-index: 20;
        width: 100%;
        margin-top: 30px;
        .decorative-left,.decorative-right{
            position: absolute;
            top: 0;
            width: 20%;
            height: 100%;
            ${props => props.theme.breakpoints.down("md")}{
                display: none;
            }
        }
        .decorative-right{
            right: 0;
            transform: scaleX(-1);
        }
        .contant{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            width: 65%;
            margin: 0 auto;
            padding: 0 10px;
            ${props => props.theme.breakpoints.down("md")}{
                width: 100%;
            }
        }
    }
    `