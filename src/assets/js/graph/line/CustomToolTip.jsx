export default function CustomToolTip({ active, payload }) {
    if (active)
        return (
            <div className="lineGraph__tooltip">
				<p>{payload[0].value + ' min'}</p>
			</div>
    )

    return <></>
}