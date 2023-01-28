import React, { useContext } from 'react';
import './CheckBoxInput.css';
import { QuestionContext } from '../../App';

type CheckBoxProps = {
    currentQuestion: number;
    disabled?: boolean;
};

const CheckBoxInput: React.FunctionComponent<CheckBoxProps> = ({
    currentQuestion,
    disabled,
}) => {
    const { questions, allAnswers, setAllAnswers, lastQuestionId } =
        useContext(QuestionContext);

    const handleCheckBox = (item: any) => {
        let newans = [...allAnswers];
        // look for the item in answers array
        let findout = newans[currentQuestion].find((i: string) => i === item);
        // if item not found, insert the item (checkbox checked)
        if (findout === undefined) newans[currentQuestion].push(item);
        // if item found, remove the item (checkbox unchecked)
        else {
            const index = newans.indexOf(item);
            newans[currentQuestion].splice(index, 1);
        }
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
                                            onChange={() => {
                                                handleCheckBox(
                                                    item.optionvalue
                                                );
                                            }}
                                            value={item.optionvalue}
                                            id={item.optionid}
                                            type='checkbox'
                                            checked={
                                                allAnswers[
                                                    currentQuestion
                                                ].find(
                                                    (i: string) =>
                                                        i === item.optionvalue
                                                ) !== undefined
                                                    ? true // if item present in answers array, set checked to true
                                                    : false // if item absent in answers array, set checked to false
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

export default CheckBoxInput;
