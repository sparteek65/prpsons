import './SmallCard.css'

export default function SmallCard(props) {
    return (
        <div className="cardContainer" onClick={()=>{console.log("clicked ",props.text)}}>
            <div >
                <img className="imageContainer" src={props.image}/>
                </div>
                <div className="textContainer">
                {props.text}
                </div>
        </div>
    )
}

