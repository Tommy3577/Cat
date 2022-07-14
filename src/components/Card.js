import './Card.css'

const Card = (props) => {
    

    return (
        <div className='card-container'>
            <div className='card-item card-image'>
                <img src={props.url}/> 
            </div>
            <h2 className='card-item card-title' >{props.breed}</h2>
            <div className='card-item card-text'>
                <p>
                    {props.name}
                </p>
                <p>
                    £{props.price}
                </p>

            </div>
        </div>
    )
}

export default Card