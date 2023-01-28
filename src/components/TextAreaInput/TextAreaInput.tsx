import React, { useContext } from 'react';
import './TextAreaInput.css';
import { QuestionContext } from '../../App';

type TextAreaProps = {
    currentQuestion: number;
    disabled?: boolean;
};

const TextAreaInput: React.FunctionComponent<TextAreaProps> = ({
    currentQuestion,
    disabled,
}) => {
    const { questions, allAnswers, setAllAnswers, lastQuestionId } =
        useContext(QuestionContext);

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newans = [...allAnswers];
        newans[currentQuestion][0] = e.target.value;
        setAllAnswers(newans);
    };

    return (
        <>
            <div>
                {currentQuestion >= 0 && currentQuestion <= lastQuestionId ? (
                    <>
                        <div className='content'>
                            {questions[currentQuestion].question}
                            <br />
                            <br />
                            <textarea
                                value={allAnswers[currentQuestion][0]}
                                onChange={(
                                    e: React.ChangeEvent<HTMLTextAreaElement>
                                ) => {
                                    handleTextArea(e);
                                }}
                                placeholder='Say about your experience...'
                                rows={7}
                                cols={50}
                                disabled={disabled}
                            ></textarea>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
};

export default TextAreaInput;
