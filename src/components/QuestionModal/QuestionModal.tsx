import React, { useContext } from 'react';
import RadioInput from '../RadioInput/RadioInput';
import TextAreaInput from '../TextAreaInput/TextAreaInput';
import CheckBoxInput from '../CheckBoxInput/CheckBoxInput';
import DateInput from '../DateInput/DateInput';
import { QuestionContext } from '../../App';
import './QuestionModal.css';

type QuestionModalProps = {
    currentQuestion: number;
    disabled?: boolean;
};

const QuestionModal: React.FunctionComponent<QuestionModalProps> = ({
    currentQuestion,
    disabled,
}) => {
    const { questions } = useContext(QuestionContext);

    return (
        <>
            <span className='question'>Question {currentQuestion + 1}</span>

            {questions[currentQuestion].questiontype === 'Radio' ? (
                <RadioInput
                    currentQuestion={currentQuestion}
                    disabled={disabled}
                />
            ) : questions[currentQuestion].questiontype === 'Date' ? (
                <DateInput
                    currentQuestion={currentQuestion}
                    disabled={disabled}
                />
            ) : questions[currentQuestion].questiontype === 'Textarea' ? (
                <TextAreaInput
                    currentQuestion={currentQuestion}
                    disabled={disabled}
                />
            ) : questions[currentQuestion].questiontype === 'Checkbox' ? (
                <CheckBoxInput
                    currentQuestion={currentQuestion}
                    disabled={disabled}
                />
            ) : null}
        </>
    );
};
export default QuestionModal;
