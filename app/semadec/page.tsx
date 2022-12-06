"use client"

import PageTitle from '../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../globals'
import HomePageCards from '../../src/components/templates/HomePageCards/Index'

const Page = () => {


  return (
    <>
      <PageTitle title={`Bem vindo `} />

      <ContainerContentPage>
        <HomePageCards />
      </ContainerContentPage>
    </>
  )
}

export default Page