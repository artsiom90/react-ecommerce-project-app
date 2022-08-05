import { Spinner } from "react-bootstrap"

interface SpinnerComponentProps {
    spinnerAnimation: 'border' | 'grow'
    spinnerVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

export const SpinnerComponent = ({ spinnerAnimation, spinnerVariant }: SpinnerComponentProps) => {
    return (
        <div className='d-flex justify-content-center'>
            <Spinner
                animation={spinnerAnimation}
                variant={spinnerVariant}
            />
        </div>
    )
}
