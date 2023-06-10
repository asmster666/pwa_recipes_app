import React from 'react';
import './style.css';

import { BackArrow } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

const BreadCrumbs = () => {

    const navigate = useNavigate();

    const goBackFn = () => {
        navigate(-1)
    }

    return (
        <div
            className={'breadCrumbs'}
            onClick={goBackFn}
        >
            <BackArrow width={30} height={30} />
        </div>
    )
};

export default BreadCrumbs;