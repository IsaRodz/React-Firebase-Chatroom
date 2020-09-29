import React from 'react';

import '../loading.scss';

const Loading = () => (
    <div id="loading-container">
        <div id="loading-rotater">
            <svg id="loading-svg" width="50" height="50" fill="transparent">
                <circle cx="25" cy="25" r="24" stroke="black"></circle>
            </svg>
        </div>
        <p id="loading-text">loading...</p>
    </div>
);

export default Loading;
