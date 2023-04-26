import { FC } from "react"

interface ChildrenProps {
    children : React.ReactNode;
}

export const DarkLayout: FC<ChildrenProps> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'grey',
            padding: '10px',
            borderRadius: '5px',
        }}>

            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>

        </div>
    )
}
