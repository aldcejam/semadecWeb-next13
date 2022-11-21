"use client"

import IllustrationCourse from "../../../../public/illustrationsForCard/IllustrationCourse/IllustrationCourse"
import IllustrationEdicoesDaSemadec from "../../../../public/illustrationsForCard/IllustrationEdicoesDaSemadec/IllustrationEdicoesDaSemadec"
import IllustrationJogosDoSeuCurso from "../../../../public/illustrationsForCard/IllustrationJogosDoSeuCurso/IllustrationJogosDoSeuCurso"
import IllustrationJogosEsportivos from "../../../../public/illustrationsForCard/IllustrationJogosEsportivos/IllustrationJogosEsportivos"
import IllustrationPublicacoesSobreSemadec from "../../../../public/illustrationsForCard/IllustrationPublicacoesSobreSemadec/IllustrationPublicacoesSobreSemadec"
import IllustrationRecordesDestaEdicao from "../../../../public/illustrationsForCard/IllustrationRecordesDeTodosOsAnos/IllustrationRecordesDeTodosOsAnos"
import { StyledHomePageCards } from "./Styled"
import HomePageCard from '../../Organisms/HomePageCards/Index';


const HomePageCards = () => {
    return (
        <StyledHomePageCards className="222">
            <div className="grid-top">
                <HomePageCard link='/' title='equipes por curso' illustration={<IllustrationCourse />} />
                <HomePageCard link='/' title='jogos esportivos' illustration={<IllustrationJogosEsportivos />} />
                <HomePageCard link='/semadec/findGame?curso=informatica' title='jogos do seu curso' illustration={<IllustrationJogosDoSeuCurso />} />
            </div>
            <div className="grid-left">
                <HomePageCard link='/' title='recordes desta edição' illustration={<IllustrationRecordesDestaEdicao />} />
                <HomePageCard link='/' title='publicações sobre a semadec' illustration={<IllustrationPublicacoesSobreSemadec />} />
            </div>
            <div className="grid-right">
                <HomePageCard link='/' title='recordes de todos os anos' illustration={<IllustrationRecordesDestaEdicao />} />
                <HomePageCard link='/' title='Edições da semadec' illustration={<IllustrationEdicoesDaSemadec />} />
            </div>
        </StyledHomePageCards>
    )
}

export default HomePageCards