import React from 'react';

import '../search-panel/search-panel.css';

const SerachPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"/>
    )
}

export default SerachPanel;