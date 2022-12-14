"use client"

import ButtonRedirectProfile from "../../../Molecules/Sidebar/ButtonRedirectProfile/Index"
import RedirectIcon from "../../../Molecules/Sidebar/RedirectIcon/Index"
import { StyledNavegation } from "./Styled"

const Navegation = () => {
    return (
        <StyledNavegation>
            <ul className="container">
                <div className="item">
                    <ButtonRedirectProfile/>
                </div>
                <div className="item">
                    <RedirectIcon
                        href="/"
                        text="sair"
                        alt="icone de redirecionamento"
                        icon="/Icons/log-out.svg"
                    />
                </div>
            </ul >
        </StyledNavegation>
    )
}
export default Navegation