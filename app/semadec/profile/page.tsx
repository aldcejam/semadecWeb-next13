"use client"

import PageTitle from '../../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../../globals'
import { StylePage } from './StylePage'
import { ViewProfile } from '../../../src/components/templates/ViewProfile/Index'
import ModifyUserData from '../../../src/components/templates/ModifyUserData/Index'


const Page = () => {



    return (
        <>
            <PageTitle title={"Perfil"}
            />

            <ContainerContentPage>
                <StylePage className='box-page'>
                    <ViewProfile screen='profileUser' />
                    <ModifyUserData />
                </StylePage>
            </ContainerContentPage>
        </>
    )
}

export default Page