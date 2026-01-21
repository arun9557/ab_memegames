import React from 'react';

const LeaderboardCard = () => {
    return (
        <div className="card-content">
            <h2>LEADERBOARD</h2>
            <p>Rise to the top and become a legend among mortals.</p>
            <div className="stat-row">
                <span>1. PepeKing</span>
                <span>9999 pts</span>
            </div>
            <div className="stat-row">
                <span>2. DogeMaster</span>
                <span>8500 pts</span>
            </div>
            <div className="stat-row">
                <span>3. CatVibing</span>
                <span>7200 pts</span>
            </div>
        </div>
    );
};

export default LeaderboardCard;
