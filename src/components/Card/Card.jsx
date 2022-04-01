import React from 'react'
import data from '../../Data/data'


function Card() {

    console.log(data.product);

    return (
        <div className='card'>
            <div className="card-body">
                {data.product.map(d => (
                    <h4 className="card-title">
                        {d.title}
                        {d.desc}
                    </h4>
                ))}

            </div>
        </div>
    )
}

export default Card