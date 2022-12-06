"use client"

import { useState } from "react";
import TopSegment from "../../Molecules/ModifyUserData/TopSegment";
import Form from "../../Organisms/ModifyUserData/Form/Index";
import { StyledModifyUserData } from "./Styled";

const ModifyUserData = () => {
    const [isOpenComponentPersonaData, setIsOpenComponentPersonaData] = useState(false)
    const ToggleComponentPersonaData = () => {
        isOpenComponentPersonaData ? setIsOpenComponentPersonaData(false) :
            setIsOpenComponentPersonaData(true)
    }

    return (
        <StyledModifyUserData className={`is-open-component-${isOpenComponentPersonaData.toString()}`}>
            <TopSegment
                ToggleComponentPersonaData={ToggleComponentPersonaData}
                isOpenComponentPersonaData={isOpenComponentPersonaData}
            />
            <Form />
        </StyledModifyUserData>
    );
};

export default ModifyUserData;
