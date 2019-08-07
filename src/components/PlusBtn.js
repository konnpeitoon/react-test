import React from 'react';
import PropTypes from 'prop-types';

const PlusBtn = ({onClick}) =>(
    <button className="warikan" onClick={onClick}>この金額をワリカン！</button>
);

PlusBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PlusBtn;