import './BigCard.css'

export default function BigCard(props) {
    return (
        <div className="bCardContainer" onClick={()=>{console.log("clicked ",props.text)}}>
            <div >
                <img className="bImageContainer" src={props.image}/>
                </div>
            <div className="Bdetails">

                <div className="bTitle">
                {props.title}
                </div>

                <div className="bBrand">
                {props.brand}
                </div>

                <div className="bPrice">
                {props.price}
                </div>
            </div>
        </div>
    )
}

