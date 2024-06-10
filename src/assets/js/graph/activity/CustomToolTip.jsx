/*
* Render activity tooltip when cursor ar on a data
* @param {Object} active - on hover a cell
* @param {Object} payload - data in use
* @component
* @returns { React.Component }
*/
export default function CustomToolTip({ active, payload }) {
    if (active)
        return (
            <div className="activity__tooltip">
				<p>{payload[0].value + 'kg'}</p>
				<p>{payload[1].value + 'Kcal'}</p>
			</div>
    )

    return <></>
}