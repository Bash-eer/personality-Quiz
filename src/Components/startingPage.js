//quiz page with quiz questions and validations
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import spinner from '../image/fast.gif';
import { useState, useEffect } from 'react';

export default function StartingPage() {
  setTimeout(() => {
    const text = document.getElementById('text');

    // 👇️ hides element (still takes up space on page)
    text.style.visibility = 'visible';
  }, 2500);

  setTimeout(() => {
    const box = document.getElementById('box');

    // 👇️ hides element (still takes up space on page)
    box.style.visibility = 'hidden';
  }, 2200);

  return (
    <div>
      <div className="flex justify-center">
        <div className="boxStyle  mt-20">
          <div
            className="flex justify-center"
            id="box"
            tyle={{ visibility: 'visible' }}
          >
            <img
              src={spinner}
              style={{ position: 'fixed', top: '50px', width: '30%' }}
              className="mt-28"
            ></img>
            <span className="mt-3 font-semibold text-lg text-red-400">
              Your test is being prepared
            </span>
          </div>

          <div id="text" style={{ visibility: 'hidden' }}>
            <span className="flex justify-center mt-28 text-lg text-red-400 font-semibold">
              Give your opinion regarding each statement.
            </span>

            <span className="flex justify-center  text-lg text-red-400 font-semibold">
              You cannot skip questions, but you can return back to them later.
            </span>
            <span className="flex justify-center mt-16">
              <Link to="/result">
                <button className="resultButtonStyle bg-red-500 font-semibold">
                  Start my test
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
