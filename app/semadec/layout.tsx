"use client"

import { ContainerGlobal, ContainerPage } from '../globals';

import SideBarPage from '../../src/components/templates/Sidebar';
import SettingsButtons from '../../src/components/Molecules/SettingsButtons/Index';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


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
