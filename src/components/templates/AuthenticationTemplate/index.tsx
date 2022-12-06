import OptionsLogin from "../../Molecules/AuthenticationModel/OptionsLogin/Index";
import Titles from "../../Molecules/AuthenticationModel/Titles/Index";
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