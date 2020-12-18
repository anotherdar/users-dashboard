import * as React from "react"

import "./styles/Table.scss";

type TableType = 'header' | 'item'

interface TableProps {
    titles: Array<string>,
    type: TableType
}

export const Table: React.FC<TableProps> = ({ titles, type }) => {

    const tableType = function <T>(args: T): T {
        return args
    }

    return (
        <div className={`Table ${tableType<TableType>(type)}`}>
            {
                titles.map((i, indx) => {
                    return <p key={indx}>{i}</p>
                })
            }
        </div>
    )
}