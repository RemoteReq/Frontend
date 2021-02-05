import React, { Component } from 'react';
import Divider from '#components/parts/Divider.jsx';
import { jobSeekerFaq, employerFaq, generalFaq } from '#assets/faq/faq.js';

const Faq = ({ question, answer }) => {
  return (
    <div className="faq">
      <div className="faq-q">
        <p>{question}</p>
      </div>

      <div className="faq-a">
        <p className="small-paragraph">{answer}</p>
      </div>
    </div>
  );
};

const FaqList = ({ title, faqs }) => {
  return (
    <div>
      <h3>{title}</h3>

      <div className="list">
        {
          faqs.map((faq, i) => {
            return (
              <Faq question={faq.question} answer={faq.answer} key={i}/>
            );
          })
        }
        </div>
    </div>
  );
};

const FaqBottom = () => {
  return (
    <div>
      <p className="small-paragraph">
        Still have questions? Email us at <a href="mailto:remotereqinfo@gmail.com">RemoteReqInfo@gmail.com</a> and we will get back to you with a response.
        Heck, we might even add your question to this list.
      </p>
    </div>
  );
};


class FaqPage extends Component {
  extendAnswer() {

  }

  render() {
    return (
    <div className="faq-page">
      <form>
        <h3>Frequently Asked Questions (FAQ)</h3>

        <FaqList
          title="General"
          faqs={generalFaq}
        />

        <FaqList
          title="For Employers"
          faqs={employerFaq}
        />

        <FaqList
          title="For Job Seekers"
          faqs={jobSeekerFaq}
        />

      <FaqBottom />
      </form>
    </div>
    );
  }
}

export default FaqPage;