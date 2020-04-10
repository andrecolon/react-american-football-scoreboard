//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

    const addSevenTD = () => setScore(score + 7);
    const addTwoFG = () => setScore(score + 2);
    const initialState = 0;
    const [score, setScore] = useState(initialState);

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <h2 className="home__name"> Lions </h2>
                        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
                        <div className="home__score"> 32 </div>
                    </div>
                    <div className="timer"> 00: 03 </div>
                    <div className="away">
                        <h2 className="away__name"> Tigers </h2>
                        <div className="away__score"> 32 </div>
                    </div>
                </div>
                <BottomRow />
            </section>
            <section className="buttons">
                <div className="homeButtons">
                    
                    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                    <button
                        className="homeButtons__touchdown"
                        onClick={() => setScore(score * 5)}
                    >
                        
            Home Touchdown
                    </button>
                    <button
                        className="homeButtons__fieldGoal" onClick={() => setScore(score * 5)} >
                        
            Home Field Goal
                    </button>
                </div>
                <div className="awayButtons">
                    <button
                        className="awayButtons__touchdown"
                        onClick={() => setScore(score * 5)}
                    >
                        
            Away Touchdown
                    </button>
                    <button className="awayButtons__fieldGoal" onClick={() => setScore(score * 5)} >  Away Field Goal </button>
                </div>
            </section>
        </div>
    );
}

export default App;
