import { StyledWeekDay } from "./Styled"

type WeekDayProps = {
    date: string
}
const WeekDay = ({date}: WeekDayProps)=>{

    const translateWeekDays = (day: string) => {
        switch (day) {
            case "Sun":
                return "Domingo";
            case "Mon":
                return "Segunda";
            case "Tue":
                return "Terça";
            case "Wed":
                return "Quarta";
            case "Thu":
                return "Quinta";
            case "Fri":
                return "Sexta";
            case "Sat":
                return "Sábado";
        }
    }

    return(
        <StyledWeekDay>
            {translateWeekDays(date)}
        </StyledWeekDay>
    )
}

export default WeekDay