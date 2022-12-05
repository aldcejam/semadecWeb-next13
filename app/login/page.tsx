"use client"

import AuthenticationTemplate from "../../src/components/templates/AuthenticationTemplate"
import LoginPresentation from "../../src/components/templates/LoginPresentation"
import { StyledPage, ContainerLogin } from "./StyledPage"


const Page = () => {

    return (
        <ContainerLogin>
            <StyledPage>
                <LoginPresentation />
                <AuthenticationTemplate/>
            </StyledPage>
        </ContainerLogin>

    )
}

export default Page