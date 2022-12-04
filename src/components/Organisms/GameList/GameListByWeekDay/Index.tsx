import GameCard from "../../../templates/GameCard"
import { GameProps } from "../../../../Types/GameList/TypesTeams"
import { StyledGameListByWeekDay } from "./Styled"

type GameListByWeekDayProps = {
    day: string
    games: GameProps[]
}
const GameListByWeekDay = ({ games, day }: GameListByWeekDayProps) => {


    return (
        <StyledGameListByWeekDay className="dasda">
            {
                games.map((game, index) => {
                    return (
                        game.specification.date.toDateString().split(" ")[0] == day
                            ?
                            <GameCard key={index} game={game} />
                            :
                            null
                    )
                })
            }
        </StyledGameListByWeekDay>
    )
}

export default GameListByWeekDay