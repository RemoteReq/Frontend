import React from 'react';
import Divider from '#components/parts/Divider.jsx';
import { jobSeekerFaq, employerFaq } from '#assets/faq/faq.js';

const Answer = ({ answer }) => {
  return (
    <p className="small-paragraph">
      {answer}
    </p>
  );
};

const Question = ({ question, answer }) => {
  return (
    <div>
      <p>{question}</p>
      <Answer answer={answer}/>

      <br/>
      <br/>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="FAQ">
      <form>
        <h3>Frequently Asked Questions (FAQ)</h3>

        <h3>For Job Seekers</h3>

        <Divider />

        <div className="list">
          {
            jobSeekerFaq.map((faq, i) => {
              return (
                <Question question={faq.question} answer={faq.answer} key={i}/>
              );
            })
          }
        </div>

        <h3>For Employers</h3>

        <Divider />

        <div className="list">
        {
            employerFaq.map((faq, i) => {
              return (
                <Question question={faq.question} answer={faq.answer} key={i}/>
              );
            })
          }
        </div>

      </form>
    </div>
  );
};

export default Faq;