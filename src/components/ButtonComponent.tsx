interface ButtonComponentProps {
    title: string
    classes?: string[]
}

export const ButtonComponent = ({ title, classes }: ButtonComponentProps) => {
    return (
        <button className={classes && classes.join(' ')}>
            {title}
        </button>
    )
}
