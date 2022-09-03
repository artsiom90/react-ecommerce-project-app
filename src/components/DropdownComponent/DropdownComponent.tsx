import { Dropdown } from "react-bootstrap"
import styles from './Dropdown.module.css'

interface DropdownComponentProps {
    sortedBy: string
    setSortedBy: (item: string) => void
}

export const DropdownComponent = ({ sortedBy, setSortedBy }: DropdownComponentProps) => {
    const sortList = ['default', 'price', 'rating']

    return (
        <Dropdown>
            <Dropdown.Toggle
                variant="success"
                className={styles.select}
            >
                Sort by: {sortedBy}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {sortList.map((item, index) => {
                    return (
                        <Dropdown.Item
                            key={index}
                            onClick={() => setSortedBy(item)}
                        >
                            {item}
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}
