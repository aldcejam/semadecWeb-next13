"use client"

import { ContainerGlobal, ContainerPage } from '../globals';

import SettingsButtons from '../../src/components/Molecules/SettingsButtons/Index';
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
