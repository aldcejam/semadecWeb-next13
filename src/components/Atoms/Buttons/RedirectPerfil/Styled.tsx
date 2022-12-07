import {styled} from "@mui/material/styles";

export const StyledButtonRedirectPerfil = styled("div")`

        position: relative;
        width: 36px;
        height: 40px;
        .image{
            position: absolute;
            width: 36px;
            height: 39px;
            clip-path: polygon(50% 3%, 94% 26%, 94% 75%, 50% 96%, 6% 72%, 6% 26%);
            z-index: 1;
            top: 1px;
        }
        .mask{
            position: relative;
            width: 36px;
            height: 40px;
            z-index: 10;
        }

    
`;
