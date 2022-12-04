"use client"

import 'react-toastify/dist/ReactToastify.css';
import { StyledPage } from './StyledPage';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <title>Login</title>

                {children}


        </>
    )

}
