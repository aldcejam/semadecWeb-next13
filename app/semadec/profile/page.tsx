"use client"

import PageTitle from '../../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../../globals'
import { StylePage } from './StylePage'
import { ViewProfile } from '../../../src/components/templates/ViewProfile'
import ModifyUserData from '../../../src/components/templates/ModifyUserData'


const Page = () => {



    return (
        <>
            <PageTitle title={"Perfil"}
            />

            <ContainerContentPage>
                <StylePage>
                    <ViewProfile screen='profileUser' />
                    <ModifyUserData />
                </StylePage>
            </ContainerContentPage>
        </>
    )
}

export default Page