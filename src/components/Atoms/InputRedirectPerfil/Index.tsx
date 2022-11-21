import Image from "next/image"
import { StyledInputRedirectPerfil } from "./Styled"

export const InputRedirectPerfil = () => {
    return (
        <>
            <StyledInputRedirectPerfil>
                    <div className="image">
                        <Image alt="imagem do perfil" src={'/profile-image.jpg'} fill={true} />
                    </div>
                    <div className="mask">
                        <Image alt="decoração ao redor da imagem" src={'/format/hexagono.png'} fill={true} />
                    </div>
            </StyledInputRedirectPerfil>
        </>
    )
}

