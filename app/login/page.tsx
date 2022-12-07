"use client"


import AuthenticationModel from "../../src/components/templates/AuthenticationModel/Index"
import LoginPresentation from "../../src/components/templates/DisplayDecorationLogin/Index"
import { StyledPage, ContainerLogin } from "./StyledPage"


const Page = () => {

    return (
        <ContainerLogin>
            <StyledPage>
                <LoginPresentation />
                <AuthenticationModel/>
            </StyledPage>
        </ContainerLogin>

    )
}

export default Page