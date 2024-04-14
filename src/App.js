import React, { useState } from "react";
import "./App.css";
import avater from "./images/image-jeremy.png";
import more from "./images/icon-ellipsis.svg";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import social from "./images/icon-social.svg";
import Self_care from "./images/icon-self-care.svg";
import timeTracking from "./data";
function App() {
  const [State, setState] = useState({ swiched: "weekly" });
  return (
    <>
      <main className="main">
        {/* container */}

        <section className="time-tracking">
          {/* user container */}

          <div className="time-tracking__user-content">
            <div className="time-tracking__user">
              <div className="user__avatar-container">
                <img
                  className="user__avatar"
                  src={avater}
                  alt="Developer avater"
                />
              </div>
              <div className="user__info">
                <span className="user__report-text">Report for</span>
                <h1 className="user__name">Jeremy Robson</h1>
              </div>
            </div>

            {/* Date and monthly container */}

            <div className="buttons-container">
              <button
                className={`btn ${State.swiched === "daily" ? "selected" : ""}`}
                id="daily-btn"
                onClick={() =>
                  setState((pre) => ({ ...pre, swiched: "daily" }))
                }
              >
                Daily
              </button>
              <button
                className={`btn ${
                  State.swiched === "weekly" ? "selected" : ""
                }`}
                id="weekly-btn"
                onClick={() =>
                  setState((pre) => ({ ...pre, swiched: "weekly" }))
                }
              >
                Weekly
              </button>
              <button
                className={`btn ${
                  State.swiched === "monthly" ? "selected" : ""
                }`}
                id="monthly-btn"
                onClick={() =>
                  setState((pre) => ({ ...pre, swiched: "monthly" }))
                }
              >
                Monthly
              </button>
            </div>
          </div>

          {/* work container */}

          <div className="time-tracking__user-cards">
            <div className="card" id="work">
              <div className="card__header">
                <img className="card__icon" src={work} alt="work" />
              </div>
              <div className="card__progress">
                <div className="card__progress-top">
                  <h2 className="card__title">Work</h2>
                  <button className="btn card__btn" title="Show more">
                    <img src={more} alt="more" />
                  </button>
                </div>
                <div className="card__progress-bottom">
                  <h3
                    className="card__actual-time"
                    id="actual-time"
                    data-card="Work"
                    data-time="weekly"
                  >
                    {timeTracking[State.swiched][0].current}hrs
                  </h3>
                  <span className="card__last-time" id="last-time">
                    last Day - {timeTracking[State.swiched][0].previous}hrs
                  </span>
                </div>
              </div>
            </div>

            {/* play container  */}
            <div className="card" id="play">
              <div className="card__header">
                <img className="card__icon" src={play} alt="play" />
              </div>
              <div className="card__progress">
                <div className="card__progress-top">
                  <h2 className="card__title">Play</h2>
                  <button className="btn card__btn" title="Show more">
                    <img src={more} alt="more" />
                  </button>
                </div>
                <div className="card__progress-bottom">
                  <h3
                    className="card__actual-time"
                    id="actual-time"
                    data-card="Play"
                    data-time="weekly"
                  >
                    {timeTracking[State.swiched][1].current}hrs
                  </h3>
                  <span
                    className="card__last-time"
                    id="last-time"
                    data-last="weekly"
                  >
                    last Day - {timeTracking[State.swiched][1].previous}hrs
                  </span>
                </div>
              </div>
            </div>

            {/* Study container */}

            <div className="card" id="study">
              <div className="card__header">
                <img className="card__icon" src={study} alt="study" />
              </div>
              <div className="card__progress">
                <div className="card__progress-top">
                  <h2 className="card__title">Study</h2>
                  <button className="btn card__btn" title="Show more">
                    <img src={more} alt="more" />
                  </button>
                </div>
                <div className="card__progress-bottom">
                  <h3
                    className="card__actual-time"
                    id="actual-time"
                    data-card="Study"
                    data-time="weekly"
                  >
                    {timeTracking[State.swiched][2].current}hrs
                  </h3>
                  <span
                    className="card__last-time"
                    id="last-time"
                    data-last="weekly"
                  >
                    last Day - {timeTracking[State.swiched][2].previous}hrs
                  </span>
                </div>
              </div>
            </div>

            {/* Exercise container */}

            <div className="card" id="exercise">
              <div className="card__header">
                <img className="card__icon" src={exercise} alt="exercise" />
              </div>
              <div className="card__progress">
                <div className="card__progress-top">
                  <h2 className="card__title">Exercise</h2>
                  <button className="btn card__btn" title="Show more">
                    <img src={more} alt="more" />
                  </button>
                </div>
                <div className="card__progress-bottom">
                  <h3
                    className="card__actual-time"
                    id="actual-time"
                    data-card="Exercise"
                    data-time="weekly"
                  >
                    {timeTracking[State.swiched][3].current}hrs
                  </h3>
                  <span
                    className="card__last-time"
                    id="last-time"
                    data-last="weekly"
                  >
                    last Day - {timeTracking[State.swiched][3].previous}hrs
                  </span>
                </div>
              </div>
            </div>

            {/* social container */}

            <div className="card" id="social">
              <div className="card__header">
                <img className="card__icon" src={social} alt="social" />
              </div>
              <div className="card__progress">
                <div className="card__progress-top">
                  <h2 className="card__title">Social</h2>
                  <button className="btn card__btn" title="Show more">
                    <img src={more} alt="more" />
                  </button>
                </div>
                <div className="card__progress-bottom">
                  <h3
                    className="card__actual-time"
                    id="actual-time"
                    data-card="Social"
                    data-time="weekly"
                  >
                    {timeTracking[State.swiched][4].current}hrs
                  </h3>
                  <span
                    className="card__last-time"
                    id="last-time"
                    data-last="weekly"
                  >
                    last Day - {timeTracking[State.swiched][4].previous}hrs
                  </span>
                </div>
              </div>
            </div>

            {/* self care container */}

            <div className="card" id="self-care">
              <div className="card__header">
                <img className="card__icon" src={Self_care} alt="self care" />
              </div>
              <div className="card__progress">
                <div className="card__progress-top">
                  <h2 className="card__title">Self Care</h2>
                  <button className="btn card__btn" title="Show more">
                    <img src={more} alt="more" />
                  </button>
                </div>
                <div className="card__progress-bottom">
                  <h3
                    className="card__actual-time"
                    id="actual-time"
                    data-card="Self Care"
                    data-time="weekly"
                  >
                    {timeTracking[State.swiched][5].current}hrs
                  </h3>
                  <span
                    className="card__last-time"
                    id="last-time"
                    data-last="weekly"
                  >
                    last Day - {timeTracking[State.swiched][5].previous}hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Author */}

      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
            target="time-tracking-dashboard"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/sivaprasath2004">sivaprasath2004</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
