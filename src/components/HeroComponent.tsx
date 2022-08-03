import heroImage from '../assets/img/hero.jpg'

export const HeroComponent = () => {
    return (
        <div
            className="text-center"
            style={{
                height: '80vh',
                background: `url(${heroImage}) 0/100% no-repeat fixed`,
                backgroundPosition: '0 70%',
            }}
        />
    )
}
