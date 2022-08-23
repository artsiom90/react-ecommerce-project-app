interface TitleComponentProps {
    title: string
    description?: string
}

export const TitleComponent = ({ title, description }: TitleComponentProps) => {
    return (
        <div>
            <h2 className='w-50 text-center mx-auto pt-5 lh-1'>
                {title}
            </h2>
            <p className='text-center fs-5 opacity-50 lh-1'>
                {description}
            </p>
        </div>
    )
}
