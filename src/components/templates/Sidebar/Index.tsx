"use client"

import { useState } from "react";
import { StyledSidebar } from "./Styled";



const Sidebar = () => {
    const [menuisative, setmenuisative] = useState(false)
    return (
        <StyledSidebar menuisactive={menuisative.toString()}>

        </StyledSidebar>
    )
}

export default Sidebar;