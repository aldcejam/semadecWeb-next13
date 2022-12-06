import OptionsLogin from "../../Molecules/AuthenticationTemplate/OptionsLogin";
import Titles from "../../Molecules/AuthenticationTemplate/Titles";
import Form from "../../Organisms/AuthenticationTemplate/Form/Index";
import { StyledAuthenticationTemplate } from "./Styled";


const AuthenticationTemplate = () => {
    return (
        <StyledAuthenticationTemplate>
            <div className="content">
                <Titles />
                <Form />
                <OptionsLogin />
            </div>
        </StyledAuthenticationTemplate>
    )
}

export default AuthenticationTemplate