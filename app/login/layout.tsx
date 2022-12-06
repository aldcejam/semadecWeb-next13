"use client"

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
