const Card = (props) => {
    return (
        <div className={`Card${props.difficulty ? ` ${props.difficulty}` : ""}`}>
            <h2>{props.id}</h2>
            {props.type === "question" ? (
                <div className="card-content question">
                    <h3 className="question-title">Question</h3>
                    <h4 className="question-text">{props.question}</h4>
                </div>
            ) : (
                <div className="card-content answer">
                    <h3 className="answer-title">Answer</h3>
                    <h4 className="answer-text">{props.answer}</h4>
                </div>
            )}
        </div>
    )
}

export default Card
