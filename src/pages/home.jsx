import React from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack/ScrollStack';
import './Home.css';

import NavigationBar from '../components/home/navigationbar';
import ArenaCard from '../components/home/ArenaCard';
import LeaderboardCard from '../components/home/LeaderboardCard';
import NewReleasesCard from '../components/home/NewReleasesCard';
import CommunityCard from '../components/home/CommunityCard';
import Footer from '../components/home/Footer';

const Home = () => {
    return (
        <div className="home-container">
            <NavigationBar />

            <div className="hero-section">
                <h1>SCROLL TO PLAY</h1>
                <p>Dive into the chaos.</p>
            </div>

            <ScrollStack
                itemDistance={100}
                itemScale={0.05}
                itemStackDistance={40}
                stackPosition="25%"
                scaleEndPosition="10%"
                baseScale={0.9}
                scaleDuration={0.4}
                rotationAmount={0}
                blurAmount={0}
                useWindowScroll={true}
            >
                <ScrollStackItem itemClassName="card-1" id="games">
                    <ArenaCard />
                </ScrollStackItem>

                <ScrollStackItem itemClassName="card-2" id="leaderboard">
                    <LeaderboardCard />
                </ScrollStackItem>

                <ScrollStackItem itemClassName="card-3">
                    <NewReleasesCard />
                </ScrollStackItem>

                <ScrollStackItem itemClassName="card-4" id="about">
                    <CommunityCard />
                </ScrollStackItem>
            </ScrollStack>
            <Footer />
        </div>
    );
};

export default Home;
