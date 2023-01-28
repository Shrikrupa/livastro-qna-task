import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionModal from '../../components/QuestionModal/QuestionModal';
import './QuestionsPage.css';
import { QuestionContext } from '../../App';

const QuestionsPage: React.FunctionComponent = () => {
    // state to maintain the current or active question shown on the modal
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const { allAnswers, setAllAnswers, lastQuestionId } =
        useContext(QuestionContext);

    const navigate = useNavigate();

    return (
        <div className='appBackground'>
            <div className='container'>
                <QuestionModal currentQuestion={currentQuestion} />

                {/* Previous button to navigate to previous question */}
                <button
                    className='normalButton'
                    onClick={() => {
                        if (currentQuestion !== 0)
                            setCurrentQuestion((q) => q - 1);
                    }}
                    disabled={currentQuestion === 0 ? true : false}
                >
                    &lt; Prev
                </button>

                {/* Next button to navigate to next question */}
                <button
                    className='normalButton'
                    onClick={() => {
                        if (currentQuestion !== lastQuestionId - 1)
                            setCurrentQuestion((q) => q + 1);
                    }}
                    disabled={
                        currentQuestion === lastQuestionId - 1 ? true : false
                    }
                >
                    Next &gt;
                </button>

                {/* to display submit button only when last question is reached */}
                {currentQuestion === lastQuestionId - 1 ? (
                    <div>
                        <button
                            className='submitButton'
                            onClick={() => {
                                setAllAnswers(allAnswers);
                                navigate('/review');
                            }}
                        >
                            Submit
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
export default QuestionsPage;
