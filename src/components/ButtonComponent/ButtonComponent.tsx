import styles from './Button.module.css'

interface ButtonComponentProps {
    title: string
    isChecked?: boolean,
    classes?: string[]
    btnClick: () => void
}

export const ButtonComponent = ({ title, isChecked, classes, btnClick }: ButtonComponentProps) => {
    return (
        <button
            className={isChecked
                ? `${styles['btn-active']} ${classes?.join(' ')}`
                : classes?.join(' ')}
            onClick={btnClick}
        >
            {title}
        </button>
    )
}
