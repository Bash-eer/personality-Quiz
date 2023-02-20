//results page
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Results() {
  return (
    <div>
      <div className="bg-red-300 p-5">
        <div className="flex justify-around text-lg">
          Then Personality Quiz
          <span className="text-lg">Help</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="boxStyle  mt-20">
          <span className="flex justify-center mt-28 text-lg text-red-400 font-semibold">
            Would you like to see the results?
          </span>
          <span className="flex justify-center mt-16">
            <Link to="/resultpage">
              <button className="resultButtonStyle bg-green-700">
                Get my Result
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
