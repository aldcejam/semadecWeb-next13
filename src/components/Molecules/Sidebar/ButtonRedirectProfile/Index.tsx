"use client"

import Link from "next/link"
import { InputRedirectPerfil } from "../../../Atoms/InputRedirectPerfil/Index"
import { StyledButtonRedirectProfile } from "./Styled"


const ButtonRedirectProfile = () => {
    return (
        <Link href={'/semadec/profile'} >
            <StyledButtonRedirectProfile>
                <InputRedirectPerfil />
                <p>Perfil</p>
            </StyledButtonRedirectProfile>
        </Link>
    )
}

export default ButtonRedirectProfile