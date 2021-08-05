import React from 'react';

const Result = ({score, playAgain}) => {
    return(
        <div className="score-board">
            <div className="score">You scored {score} out of 5!</div>
            <button className="playBtn" onClick={playAgain}>Play again!</button>
        </div>
    )
}

export default Result;