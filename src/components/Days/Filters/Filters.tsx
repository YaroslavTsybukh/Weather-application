import "./filters.scss"

export const Filters = () => {
    const filtersValue = [
        {
            "id": 1,
            'name': "На неделю"
        },
        {
            "id": 2,
            'name': "На 10 дней"
        },
        {
            "id": 3,
            'name': "На месяц"
        },
    ]

    return(
        <div className="filters-weather">
            <div className="filters-weather__block">
                {filtersValue.map( title => (
                    <div key={title.id} className="filters-weather__item">{title.name}</div>
                ))}
            </div>
            <div className="filters-weather__cancel">Отмена</div>
        </div>
    )
}