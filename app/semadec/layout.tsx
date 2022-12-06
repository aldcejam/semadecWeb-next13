"use client"

import { ContainerGlobal, ContainerPage } from '../globals';

import SideBarPage from '../../src/components/templates/SidebarPage/Index';
import SettingsButtons from '../../src/components/Molecules/SettingsButtons/Index';



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            {/*  */}
            <ContainerGlobal>
                <SideBarPage />
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
