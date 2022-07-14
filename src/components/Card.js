import './Card.css'

const Card = (props, index, handleSubmit, cats, id) => {
    

    return (
        <div className='card-container' onClick={() => props.handleSubmit(id)}>
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
            {/* <button onClick={()=> {handleSubmit()}}>Add</button> */}
        </div>
    )
}

export default Card