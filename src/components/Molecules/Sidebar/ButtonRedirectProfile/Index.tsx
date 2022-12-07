"use client"

import Link from "next/link"
import ButtonRedirectPerfil from "../../../Atoms/Buttons/RedirectPerfil/Index"
import { StyledButtonRedirectProfile } from "./Styled"


const ButtonRedirectProfile = () => {
    return (
        <Link href={'/semadec/profile'} >
            <StyledButtonRedirectProfile>
                <ButtonRedirectPerfil />
                <p>Perfil</p>
            </StyledButtonRedirectProfile>
        </Link>
    )
}

export default ButtonRedirectProfile