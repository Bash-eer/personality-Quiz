//quiz page with quiz questions and validations
import React from 'react';
import result from '../image/resul.webp';

export default function LastPage() {
  return (
    <div>
      <div className="bg-red-300 p-5">
        <div className="flex justify-between text-lg">
          Then Personality Quiz
          <span className="text-lg">Contact</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="boxStyle  mt-20">
          <span className="flex justify-center mt-16 text-lg text-red-400 font-semibold">
            Your result's are
          </span>
          <span className="flex justify-center">
            <img src={result}></img>
          </span>
        </div>
      </div>
    </div>
  );
}
