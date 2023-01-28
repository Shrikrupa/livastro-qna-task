import React, { useContext } from 'react';
import { QuestionContext } from '../../App';
import './RadioInput.css';

type RadioProps = {
    currentQuestion: number;
    disabled?: boolean;
};

const RadioInput: React.FunctionComponent<RadioProps> = ({
    currentQuestion,
    disabled,
}) => {
    const { questions, allAnswers, setAllAnswers, lastQuestionId } =
        useContext(QuestionContext);

    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                            {questions[currentQuestion].questionoption.map(
                                (item: any) => (
                                    <div>
                                        <input
                                            onChange={(
                                                e: React.ChangeEvent<HTMLInputElement>
                                            ) => {
                                                handleRadio(e);
                                            }}
                                            value={item.optionvalue}
                                            id={item.optionid}
                                            type='radio'
                                            checked={
                                                allAnswers[
                                                    currentQuestion
                                                ][0] === item.optionvalue
                                                    ? true
                                                    : false
                                            }
                                            disabled={disabled}
                                        />
                                        <label>{item.optionvalue}</label>
                                    </div>
                                )
                            )}
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
};

export default RadioInput;
