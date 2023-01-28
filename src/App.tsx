import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import QuestionsPage from './Pages/QuestionsPage/QuestionsPage';
import AnswersReviewPage from './Pages/AnswersReviewPage/AnswersReviewPage';
import FinalSubmissionPage from './Pages/FinalSubmissionPage/FinalSubmissionPage';
import './App.css';

// defining custom types

export type questionsType = {
    questionid: number;
    question: string;
    questiontype: string;
    questionoption: questionOptionType[];
};

export type questionOptionType = {
    optionid: number;
    optionvalue: string;
    selected: boolean;
};

const questions = [
    {
        questionid: 1,
        question: 'Select your data',
        questiontype: 'Radio',
        questionoption: [
            {
                optionid: 1,
                optionvalue: 'A',
                selected: false,
            },
            {
                optionid: 2,
                optionvalue: 'B',
                selected: false,
            },
            {
                optionid: 3,
                optionvalue: 'C',
                selected: false,
            },
        ],
    },
    {
        questionid: 2,
        question: 'Do you want a bike?',
        questiontype: 'Radio',
        questionoption: [
            {
                optionid: 14,
                optionvalue: 'Yes',
                selected: false,
            },
            {
                optionid: 15,
                optionvalue: 'No',
                selected: false,
            },
        ],
    },
    {
        questionid: 3,
        question: 'Date & Time Slot',
        questiontype: 'Date',
        questionoption: [
            {
                optionid: 16,
                optionvalue: '',
                selected: false,
            },
        ],
    },
    {
        questionid: 4,
        question: 'Package selection test',
        questiontype: 'Radio',
        questionoption: [
            {
                optionid: 36,
                optionvalue: 'a',
                selected: false,
            },
            {
                optionid: 37,
                optionvalue: 'b',
                selected: false,
            },
            {
                optionid: 38,
                optionvalue: 'c',
                selected: false,
            },
        ],
    },
    {
        questionid: 5,
        question: 'Enter Your exprience details',
        questiontype: 'Textarea',
        questionoption: [
            {
                optionid: 39,
                optionvalue: '',
            },
        ],
    },
    {
        questionid: 6,
        question: 'Testing check box',
        questiontype: 'Checkbox',
        questionoption: [
            {
                optionid: 41,
                optionvalue: 'A',
                selected: false,
            },
            {
                optionid: 42,
                optionvalue: 'B',
                selected: false,
            },
            {
                optionid: 43,
                optionvalue: 'C',
                selected: false,
            },
        ],
    },
];

// default value for context created

const questionContextDefaultValue = {
    questions: questions,
    allAnswers: questions.map((item) => {
        if (item.questiontype === 'Checkbox') {
            return [];
        } else {
            return [''];
        }
    }),
    setAllAnswers: (allAnswers: any) => {},
    lastQuestionId: questions.length,
};

// context creation

export const QuestionContext = createContext(questionContextDefaultValue);

// App component

const App: React.FunctionComponent = () => {
    const [allAnswers, setAllAnswers] = useState(
        questionContextDefaultValue.allAnswers
    );

    return (
        <>
            {/* wrapping context provider for the app */}
            <QuestionContext.Provider
                value={{
                    questions,
                    allAnswers,
                    setAllAnswers,
                    lastQuestionId: questions.length,
                }}
            >
                {/* configuring routes */}
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<WelcomePage />} />
                        <Route path='/questions' element={<QuestionsPage />} />
                        <Route path='/review' element={<AnswersReviewPage />} />
                        <Route
                            path='/submission'
                            element={<FinalSubmissionPage />}
                        />
                        <Route path='/*' element={<WelcomePage />} />
                    </Routes>
                </BrowserRouter>
            </QuestionContext.Provider>
        </>
    );
};

export default App;
