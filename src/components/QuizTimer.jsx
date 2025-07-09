import React, { useState, useEffect } from 'react'

const QuizTimer = ({ difficulty, questionCount, questionIndex, onTimeUp }) => {


    const getTimeLimit = () => {
        const baseTimes = {
            easy: 5, 
            medium: 3 * 60, 
            hard: 3 * 60 + 45, 
        };

        const additionalTimePerQuestion = 20; 
        const baseTime = baseTimes[difficulty] || baseTimes.easy;

        
        if (questionCount > 10) {
            const extraTime = (questionCount - 10) * additionalTimePerQuestion;
            return baseTime + extraTime;
        }

        return baseTime;
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLimit());

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            setTimeLeft(getTimeLimit());
            return;
        }
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);


    
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className='text-neutral-100 font-medium text-lg'>
            <p className="">
                Time Left: {" "}
                <span className="font-semibold">{formatTime(timeLeft)}</span>
            </p>
        </div>
    )
}

export default QuizTimer