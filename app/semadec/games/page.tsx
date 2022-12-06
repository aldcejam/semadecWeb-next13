"use client"

import { useSearchParams } from 'next/navigation'
import PageTitle from '../../../src/components/Atoms/PageTitle/Index'
import { ContainerContentPage } from '../../globals'
import { StylePage } from './StylePage'
import GameList from '../../../src/components/templates/GameList/Index'


const Page = () => {


    const searchParams = useSearchParams()
    const sportSelected = searchParams.get('sportSelected')
    const categoryGenre = searchParams.get('categoryGenre')
    const category = searchParams.get('category')


    const ListWeekday = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ]

    return (
        <>
            <PageTitle title={
                `${sportSelected ? sportSelected : "esporte não definido"}
                ${category ? ` - ${category}` : ""}
                `}
            />

            <ContainerContentPage>
                <StylePage className="box-page">
                    <div className="decoration" />
                    <div className="border" />
                    <div className="content">
                        <h2>{categoryGenre}</h2>
                        {ListWeekday.map((day) => (
                            <GameList key={day} day={day} />
                        ))}
                    </div>
                </StylePage>
            </ContainerContentPage>
        </>
    )
}

export default Page