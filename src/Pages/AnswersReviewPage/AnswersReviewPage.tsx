import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionModal from '../../components/QuestionModal/QuestionModal';
import './AnswersReviewPage.css';
import { QuestionContext } from '../../App';

const AnswersReviewPage: React.FunctionComponent = () => {
    const navigate = useNavigate();

    const gotoSubmission = () => {
        navigate('/submission');
    };

    const { questions } = useContext(QuestionContext);

    return (
        <div className='pageBackground'>
            <span className='heading'>Your Answers...</span>
            <br />
            <br />
            {questions.map((question, currentQuestion: number) => (
                <div>
                    <QuestionModal
                        currentQuestion={currentQuestion}
                        disabled={true}
                    />
                </div>
            ))}
            <button className='button' onClick={gotoSubmission}>
                Confirm
            </button>
        </div>
    );
};

export default AnswersReviewPage;
