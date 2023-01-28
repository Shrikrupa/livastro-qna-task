import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalSubmissionPage.css';

const FinalSubmissionPage: React.FunctionComponent = () => {
    const navigate = useNavigate();

    const gotoStart = () => {
        navigate('/');
    };

    return (
        <>
            <div className='appBackground'>
                <div className='container'>
                    <br />
                    <span className='heading'>Submitted !</span>
                    <p className='caption'>
                        {' '}
                        Thanks ! Your response got saved successfully...
                    </p>
                    <button className='button' onClick={gotoStart}>
                        Re-Take Q&A
                    </button>
                </div>
            </div>
        </>
    );
};

export default FinalSubmissionPage;
