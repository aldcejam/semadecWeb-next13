import ButtonDarkMode from "../../Atoms/Buttons/DarkMode"
import SettingButton from "../../Atoms/SettingButton/Index"
import { StyledSettingsButtons } from "./Styled"

const SettingsButtons = () => {
    return (
        <StyledSettingsButtons>
            <ButtonDarkMode/>
            <SettingButton/>
        </StyledSettingsButtons>
    )

}
export default SettingsButtons