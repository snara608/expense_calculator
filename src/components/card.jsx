import "./styles.css";

function Card({title, money, buttontext, buttontype, handleClick, success = true}){
    return(
        <div className="styleCard">
            <h3 className="cardTitle">
                {`${title}`}
                <span className={success ? "success" : "failure" }>
                    {`${money}`}
                </span>
            </h3>
            <button onClick={handleClick} className={buttontype}>
                {buttontext}
            </button>
        </div>
    )
}

export default Card;