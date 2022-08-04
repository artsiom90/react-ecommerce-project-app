interface ButtonComponentProps {
    title: string
    isChecked: boolean,
    classes?: string[]
    btnClick: () => void
}

export const ButtonComponent = ({ title, isChecked, classes, btnClick }: ButtonComponentProps) => {
    return (
        <button
            className={isChecked
                ? `${classes?.join(' ')} btn-menu-active`
                : classes?.join(' ')}
            onClick={btnClick}
        >
            {title}
        </button>
    )
}
