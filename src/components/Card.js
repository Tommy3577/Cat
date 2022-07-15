import './Card.css'

const Card = ({cat, handleSubmit}) => {

    return (
        <div className='card-container' id={cat.id}>
            <div className='card-item card-image'>
                <img src={cat.image}/> 
            </div>
            <h2 className='card-item card-title' >Name: {cat.name}</h2>
            <div className='card-item card-text'>
                <p>
                    Breed: {cat.breed}
                </p>
                <p>
                    Price: £{cat.price}
                </p>
                <button className='addButton' onClick={() => handleSubmit(cat)}>Add to bag</button>

            </div>
        </div>
    )
}

export default Card
