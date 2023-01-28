import React, { useContext } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './DateInput.css';
import 'react-datepicker/dist/react-datepicker.css';
import { QuestionContext } from '../../App';

type DateProps = {
    currentQuestion: number;
    disabled?: boolean;
};

const DateInput: React.FunctionComponent<DateProps> = ({
    currentQuestion,
    disabled,
}) => {
    const { questions, allAnswers, setAllAnswers, lastQuestionId } =
        useContext(QuestionContext);

    const handleDateChange = (date: Date) => {
        let newans = [...allAnswers];
        newans[currentQuestion][0] = date.toString();
        setAllAnswers(newans);
    };

    return (
        <>
            <div>
                {currentQuestion >= 0 && currentQuestion <= lastQuestionId ? (
                    <>
                        <div className='content'>
                            {questions[currentQuestion].question} <br />
                            <br />
                            <br />
                            <DateTimePicker
                                onChange={(date: Date) => {
                                    handleDateChange(date);
                                }}
                                value={
                                    allAnswers[currentQuestion][0] === ''
                                        ? new Date() // if no value, set to current date()
                                        : new Date( // if value, parse and set the date value
                                              Date.parse(
                                                  allAnswers[currentQuestion][0]
                                              )
                                          )
                                }
                                disabled={disabled}
                            />
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
};
export default DateInput;
