/*
* Render line graph bartchart
- @param {Object} sessions - data from api
* @component
* @returns { React.Component }
*/
export default function CustomToolTip({ active, payload }) {
    if (active)
        return (
            <div className="lineGraph__tooltip">
				<p>{payload[0].value + ' min'}</p>
			</div>
    )

    return <></>
}