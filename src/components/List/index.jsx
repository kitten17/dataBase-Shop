import { useEffect, useState } from 'react'
import docs from '../../server/conditioners'
import { Link } from 'react-router-dom'

import module from './style.module.scss'

function List() {
    const [items, setItems] = useState([])

    useEffect(() => {
        docs.then(response => {
            response.docs.forEach(i => {
                setItems(p => [
                    ...p,
                    i.data()
                ])
            })
        })
    }, [])

    return (
        <div className={module.list}>
            <h1 className={module["list-title"]}>
                Корзины для кондиционеров на фасад
            </h1>

            <div className={module["list-container"]}>
                {items.map(i => (
                    <Link to ={`/conditioners/${i.id}`} key={i.id} className={module.list__block} onClick = {()=>window.scrollTo(0, 0)}>
                        <img src={i.image} alt={i.title} />

                        <h1 className={module.list__title}>
                            {i.title.length >= 60 ? i.title.slice(0, 40) + "..." : i.title}
                        </h1>
                        <h1 className={module.list__price}>
                            {i.price}

                            <span>
                                ₽/шт
                            </span>

                            {i.previousPrice && (
                                <p>
                                    {i.previousPrice}
                                    ₽
                                </p>
                            )}
                        </h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default List;