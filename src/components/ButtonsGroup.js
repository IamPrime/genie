import React from "react";

const ButtonsGroup = props => {
    const [isSelected, answered, isCorrect, fixedAnswers, index, id, choices, setChoices] = [props.isSelected, props.answered, props.isCorrect, props.fixedAnswers, props.index, props.id, props.choices, props.setChoices]

    const clickHandler = () => {
        // array for storing chosen answer and highlighting pick on click
        const newChoices = [...choices]
        newChoices.splice(index, 1, fixedAnswers)
        setChoices(newChoices)
    }

    return (
        <button
            className={`answers-btn 
          ${isSelected && 'blue'}
          ${answered && 'faded'}
          ${isSelected && answered && 'green'}
          ${answered && isCorrect && 'green'} 
          ${isSelected && answered && !isCorrect && 'red'}
          `}
            onClick={() => clickHandler()}
            disabled={answered ? true : false}
            key={id} >
            {fixedAnswers}
        </button>
    )
}

export default ButtonsGroup