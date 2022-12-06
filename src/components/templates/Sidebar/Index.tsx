"use client"

import { useState } from "react";
import MenuBurguer from "../../Atoms/MenuBurguer/Index";
import { StyledSidebar } from "./Styled";



const Sidebar = () => {
    const [menuisative, setmenuisative] = useState(false)
    return (
        <StyledSidebar menuisactive={menuisative.toString()}>
            <MenuBurguer menuisactive={menuisative} setmenuisative={setmenuisative} />
        </StyledSidebar>
    )
}

export default Sidebar;