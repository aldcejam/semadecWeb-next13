"use client"

import PageTitle from '../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../../src/styles/global/globals'
import { StylePageIndex } from '../../src/styles/Styled.index'
import HomePageCards from '../../src/components/templates/HomePageCards/Index'

export default function Page() {
  return (
    <>
      <PageTitle title={`Bem vindo `} />

      <ContainerContentPage with_background_color='false'>
        <StylePageIndex className="box-page">
          <HomePageCards />
        </StylePageIndex>
      </ContainerContentPage>
    </>
  )
}