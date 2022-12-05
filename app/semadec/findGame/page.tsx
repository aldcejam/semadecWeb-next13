"use client"

import { useState } from "react";
import PageTitle from "../../../src/components/Atoms/PageTitle/Index";
import ListSports from "../../../src/components/templates/ListSports";
import ModalSelectCategorys from "../../../src/components/templates/ModalSelectCategorys";
import { dataForSearchBySportCategoriesProps } from "../../../src/components/templates/ModalSelectCategorys/TypesDataForResearchGame";
import { ContainerContentPage } from "../../globals";
import { StylePage } from "./StylePage";
import { useSearchParams } from 'next/navigation'


const Page = ()=>{

    const searchParams = useSearchParams()
    const course = searchParams.get('curso')


    const [dataForSearchBySportCategories, setDataForSearchBySportCategories] = useState<dataForSearchBySportCategoriesProps>({
        sport: {
            sportName: "",
            categorys: undefined,
            categoryGenre: []
        },
        userSelectedCategory: "",
        userSelectedCategoryGenre: ""
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ToggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }

    const Submit = () => {
        const category = dataForSearchBySportCategories.userSelectedCategory
        const categoryGenre = dataForSearchBySportCategories.userSelectedCategoryGenre
        const sportSelected = dataForSearchBySportCategories.sport.sportName
        const redirectUrl = `games?${category ? `category=${category}&` : ""}${categoryGenre ? `categoryGenre=${categoryGenre}&` : ""}${sportSelected ? `sportSelected=${sportSelected}` : ""}`

        window.location.href = redirectUrl
    }

    return (
        <>
            <PageTitle title={`Encontrar jogo`} />

            <ContainerContentPage>
                <StylePage className="box-page">
                    <div className="container">
                        <div className="decoration"/>
                        <ListSports
                            ToggleModal={ToggleModal}
                            setDataForSearchBySportCategories={setDataForSearchBySportCategories}
                            course={course? course : "não há curso selecionado no seu perfil"} />
                        <ModalSelectCategorys
                            ToggleModal={ToggleModal}
                            modalIsOpen={modalIsOpen}
                            data={dataForSearchBySportCategories}
                            setdata={setDataForSearchBySportCategories}
                            Submit={Submit}
                        />
                    </div>
                </StylePage>
            </ContainerContentPage>
        </>
    )
}

export default Page