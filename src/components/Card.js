import './Card.css'

const Card = ({cat, handleSubmit}) => {

    return (
        <div className='card-container' id={cat.id} onClick={() => handleSubmit(cat)}>
            <div className='card-item card-image'>
                <img src={cat.image}/> 
            </div>
            <h2 className='card-item card-title' >{cat.breed}</h2>
            <div className='card-item card-text'>
                <p>
                    {cat.name}
                </p>
                <p>
                    £{cat.price}
                </p>

            </div>
        </div>
    )
}

export default Card
