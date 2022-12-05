import ButtonLoginGoogle from "../../../Atoms/Buttons/LoginGoogle"
import ButtonLoginSuap from "../../../Atoms/Buttons/LoginSuap"
import { StyledOptionsLogin } from "./Styled"

const OptionsLogin = () => {
    return (
        <StyledOptionsLogin>
            <div>
                <p>Conecte-se com:</p>
            </div>
            <div className="account-options">
                <ButtonLoginGoogle/>
                <ButtonLoginSuap/>
            </div>
        </StyledOptionsLogin>
    )
}

export default OptionsLogin