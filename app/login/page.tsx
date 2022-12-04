"use client"

import LoginPresentation from "../../src/components/templates/LoginPresentation"
import { StyledPage, AuthenticationContainer, ContainerLogin } from "./StyledPage"


const Page = () => {
    return (
        <ContainerLogin>
            <StyledPage>
                <LoginPresentation />
                <AuthenticationContainer>
                </AuthenticationContainer>
            </StyledPage>
        </ContainerLogin>

    )
}

export default Page