import { Container } from "react-bootstrap"
import { ButtonComponent } from "../components/ButtonComponent"
import { HeroComponent } from "../components/HeroComponent"
import { TitleComponent } from "../components/TitleComponent"

export const HomePage = () => {
    const btnMenuList = ['First menu', 'Senond menu', 'Third menu']
    const btnMenuClasses = ['btn-menu']

    return (
        <>
            <HeroComponent />
            <Container fluid>
                <TitleComponent
                    title={'Welcome To Simple House'}
                    description={'Enjoy Your Meal'}
                />
                <div className='d-flex justify-content-center pt-3 gap-4 pb-5'>
                    {btnMenuList.map(item => {
                        return (
                            <ButtonComponent
                                title={item}
                                classes={btnMenuClasses}
                            />
                        )
                    })}
                </div>
            </Container>
        </>
    )
}
