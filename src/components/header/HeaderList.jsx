import headerData from '../../data/headerList.js'

export function HeaderList() {
    return (
        < ul className="ul-header-main" >
            {
                headerData.map(h => {
                    return (
                        <li key={h.id}><a href={h.anchor}>{h.title}</a></li>

                    )
                })
            }
        </ul >

    )
}