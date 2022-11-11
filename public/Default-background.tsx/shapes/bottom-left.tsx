import { styled } from "@mui/material";

export const BottomLeft = () => {
    const Style = styled("div")`
    position: absolute;
    width: clamp(400px, 45vw, 900px);
    z-index: 1;
    bottom: -140px;
    left: -60px;

    .cls-1 {
      fill: ${({ theme }) => theme.palette.background.paper};
      filter: ${(props) =>
            props.theme.palette.mode === "dark"
                ? "drop-shadow( 3px 3px 4px rgba(0, 0, 0, .7))"
                : "drop-shadow( 3px 3px 6px #808080ad)"};
    }
  `;

    return (
        <Style>
            <svg viewBox="0 0 301.86 268.77">
                <g id="Camada_2" data-name="Camada 2">
                    <g id="BACKGROUND">
                        <path
                            className="cls-1"
                            d="M8.65,90.31S59.7-50,117,19.16s83.95-60,116.21,20.7c29.39,73.58,88.06,21.48,62.24,135.52s3.88,88.54-168.94,93.07S8.13,227.37,8.13,227.37Z"
                        />
                    </g>
                </g>
            </svg>
        </Style>
    );
};
