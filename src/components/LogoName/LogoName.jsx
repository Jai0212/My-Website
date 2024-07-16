import React from 'react';
import './LogoName.css';

const LogoName = ({ logoSrc, logoName, isCentered }) => {

    const containerClass = isCentered ? 'logo-container hover-effect' : 'logo-container';

    return (
        <div className={containerClass}>
            <img src={logoSrc} alt={logoName} className="logo-image" />
            {isCentered ? <div className="tooltip">{logoName}</div> : <></>}
        </div>
    );
};

export default LogoName;
