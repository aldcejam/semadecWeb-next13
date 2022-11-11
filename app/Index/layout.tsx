"use client"

import { ContainerGlobal } from '../../src/styles/global/globals';
import { ContainerPage } from '../../src/styles/global/globals';



import DefaultBackground from '../../public/Default-background.tsx/Index';
import SideBarPage from '../../src/components/templates/Sidebar/Index';
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
                <DefaultBackground />
                <ContainerGlobal>
                    <SideBarPage />
                    <SettingsButtons />
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                    {/* Same as */}
                </ContainerGlobal>
                {/*  */}
                <ContainerPage>
                    {children}
                </ContainerPage>

        </>
    )

}
