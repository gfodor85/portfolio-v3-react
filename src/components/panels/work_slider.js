import React from 'react';
import PropTypes from 'prop-types';

const WorkSlider = ({work}) => {
    const {index, title, description, imageDesktop, imageMobile} = work;
    return (
        <div id={`WorkSlider-${index}`} className="card">
            <img src={imageDesktop} />
            <img src={imageMobile} />
            <div className="details">
                <span className="index">{index+1}</span>                
            </div>
        </div>
    )
}

WorkSlider.propTypes = {
    work: PropTypes.object.isRequired
}

export default WorkSlider;