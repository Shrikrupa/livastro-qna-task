import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage: React.FunctionComponent = () => {
    const navigate = useNavigate();

    const gotoQuestionnaire = () => {
        navigate('/questions');
    };

    return (
        <div className='appBackground'>
            <div className='container'>
                {' '}
                <br />
                <span className='heading'>Questions & Answers</span>
                <p className='caption'> Please click on Proceed to begin</p>
                <button className='button' onClick={gotoQuestionnaire}>
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
