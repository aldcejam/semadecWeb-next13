"use client"

import { ContainerGlobal, ContainerPage } from '../globals';

/* import SidebarPage from '../../src/components/templates/SidebarPage/Index'; */
import SettingsButtons from '../../src/components/Molecules/SettingsButtons/Index';
import { StyledSidebar } from '../../src/components/templates/Sidebar/Styled';
import Sidebar from '../../src/components/templates/Sidebar/Index';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            {/*  */}
            <ContainerGlobal>
                {/* <SidebarPage /> */}
                <Sidebar/>
                <SettingsButtons />
                {/* Same as */}
            </ContainerGlobal>
            {/*  */}
            <ContainerPage>
                {children}
            </ContainerPage>

        </>
    )

}
