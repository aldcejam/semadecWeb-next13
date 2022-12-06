"use client"

import { StyledPageTitle } from "./Styled";

type TypesPageTitle = {
    title: string
}

const PageTitle = ({ title }: TypesPageTitle) => {
    const dividerTitle = title.split("-")
    return (
        <StyledPageTitle>
            {dividerTitle[1] ?
                <span>
                    {dividerTitle[0]}
                    <span className="subtitle">{"-" + dividerTitle[1]}</span>
                </span>
                : <span>{dividerTitle[0]}</span>}
        </StyledPageTitle>
    )
}

export default PageTitle;