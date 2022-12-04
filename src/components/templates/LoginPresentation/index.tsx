import { Splide, SplideSlide } from '@splidejs/react-splide';
import { DateIllustration } from '../../../../public/carousel-illustrations/DateIllustration';
import { StyledLoginPresentation } from './Styled';


const LoginPresentation = () => {
    return (
        <StyledLoginPresentation>
            <Splide
                options={{
                    rewind: false,
                    arrows: false,
                    gap: '1rem',
                    height: '350px',
                    pauseOnFocus: true,
                    resetProgress: false,
                }}>
                <SplideSlide className='item-slide'>
                    <DateIllustration />
                </SplideSlide>
                <SplideSlide className='item-slide'>
                    <DateIllustration />
                </SplideSlide>
                <SplideSlide className='item-slide'>
                    <DateIllustration />
                </SplideSlide>
            </Splide>
        </StyledLoginPresentation>
    )
}

export default LoginPresentation