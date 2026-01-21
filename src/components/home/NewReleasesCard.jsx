import React from 'react';

const NewReleasesCard = () => {
    return (
        <div className="card-content">
            <h2>NEW RELEASES</h2>
            <p>Fresh games dropping every week. Stay ahead of the curve.</p>
            <div className="tags">
                <span className="tag">Action</span>
                <span className="tag">Strategy</span>
                <span className="tag">Chaos</span>
            </div>
        </div>
    );
};

export default NewReleasesCard;
