import React, { Component } from 'react';
import {
  Link, Route, Switch,
} from 'react-router-dom';
import axios from 'axios';
import Navigation2 from '../../components/parts/Navigation2.jsx';
import Auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workTypeSelect: '', // if part time, render part time QnA. if full time render full time QnA
    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      console.log('retrieving user details... ');

      axios({
        url: `${backend}/api/user/getSingleUserDetails`,
        method: 'post',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
        .then(() => {
          this.setState({
            redirectToReferrer: true,
          }, () => { console.log(this.state); });
        })
        .catch((error) => { return console.log(error); });
    }
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false,
    }, () => {
      console.log('Signing you out... See you next time!');
    });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { console.log(this.state); });
  }

  isChecked(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  render() {
    return (
    <div>
      <Navigation2 />

      <div className="QnA">


        <h3>Complete your profile.</h3>
        <p>
          Answer a few more questions about your skills and interests
          so we can better match you to your perfect job.
        </p>


        <form>
          {/* <div className="QnA-map">
            This is a nav for the rest of the form..
          </div> */}

          <Switch>
            <Route path="/QnA/basics" render={(props) => {
              return (
                <FilterQnA {...props}
                  handleChange={this.handleChange}
                />
              );
            }}/>
            <Route path="/QnA/causes" render={(props) => {
              return (
                <QnACauses {...props}
                  handleChange={this.handleChange}
                />
              );
            }} />
            <Route path="/QnA/experience" render={(props) => {
              return (
                <QnAExperience {...props}
                  handleChange={this.handleChange}
                />
              );
            }} />
            <Route path="/QnA/expectations" render={(props) => {
              return (
                <QnAExpectations {...props}
                  handleChange={this.handleChange}
                />
              );
            }} />
          </Switch>
        </form>
      </div>
    </div>
    );
  }
}

const Question = ({ question, type, valueName }) => {
  switch (type) {
    case 'yesOrNo':
      return (
        <div>
          <p>{`${question}`}</p>
        </div>
      );
    case 'input':
      return (
        <div>
          <p>{`${question}`}</p>
        </div>
      );
    case 'select':
      return (
        <div>
          <p>{`${question}`}</p>
        </div>
      );
    default:
      return (
        <div>
          <p>Question Type Required</p>
        </div>
      );
  }
};

const CauseSelect = ({ handleChange }) => {
  return (
    <select
      name="C"
    >
      <option></option>
    </select>
  );
};

const Radio = ({
  value, label, name, handler,
}) => {
  return (
    <div className="radio">
      <input
        type="radio"
        value={value}
        name={name}
        onChange={(e) => { return handler(e); }}
        />
      <label>{label}</label>
    </div>
  );
};

const FilterQnA = ({ handleChange }) => {
  return (
    <div className="QnA-page">
      <p>
        Are you eligible to work in the United States?
      </p>
      <div className="radios">
        <Radio value={true} label="yes" name="eligibleToWorkInUS" handler={handleChange}/>

        <Radio value={false} label="no" name="eligibleToWorkInUS" handler={handleChange}/>
      </div>

      <p>
        Which of the following causes would you like to work on? (Select up to 3)
      </p>
      <select>
        <option>-----</option>
        <option>Educational Equity (K-12)</option>
        <option>Immigrant Rights</option>
        <option>Voting Rights</option>
        <option>Youth Extracurriculars (sports, band, etc.)</option>
        <option>Environmental Rights</option>
        <option>Animal Rights</option>
        <option>US Military Veterans</option>
        <option>LGBTQ rights </option>
        <option>Health and Medical Care</option>
        <option>Women’s Rights </option>
        <option>Community Development </option>
        <option>Criminal Justice Reform</option>
        <option>Food Insecurity</option>
        <option>Water and Sanitation</option>
        <option>Arts and Culture </option>
        <option>Religion</option>
      </select>
      <select>
        <option>-----</option>
        <option>Educational Equity (K-12)</option>
        <option>Immigrant Rights</option>
        <option>Voting Rights</option>
        <option>Youth Extracurriculars (sports, band, etc.)</option>
        <option>Environmental Rights</option>
        <option>Animal Rights</option>
        <option>US Military Veterans</option>
        <option>LGBTQ rights </option>
        <option>Health and Medical Care</option>
        <option>Women’s Rights </option>
        <option>Community Development </option>
        <option>Criminal Justice Reform</option>
        <option>Food Insecurity</option>
        <option>Water and Sanitation</option>
        <option>Arts and Culture </option>
        <option>Religion</option>
      </select>
      <select>
        <option>-----</option>
        <option>Educational Equity (K-12)</option>
        <option>Immigrant Rights</option>
        <option>Voting Rights</option>
        <option>Youth Extracurriculars (sports, band, etc.)</option>
        <option>Environmental Rights</option>
        <option>Animal Rights</option>
        <option>US Military Veterans</option>
        <option>LGBTQ rights </option>
        <option>Health and Medical Care</option>
        <option>Women’s Rights </option>
        <option>Community Development </option>
        <option>Criminal Justice Reform</option>
        <option>Food Insecurity</option>
        <option>Water and Sanitation</option>
        <option>Arts and Culture </option>
        <option>Religion</option>
      </select>

      <p>
        Why do you want to work on these causes? (Optional 250 words or less)
      </p>

      <div className="textarea-div">
        <textarea/>
      </div>


      <p>
        Are you seeking full-time work, part-time, or either?
      </p>      <div className="radios">
        <Radio value="full-time" label="full-time" name="typingWork" handler={handleChange}/>

        <Radio value="part-time" label="part-time" name="typingWork" handler={handleChange}/>

        <Radio value="either" label="either" name="typingWork" handler={handleChange}/>
      </div>

      <p>
        On what date are you available to start working? (Select a date on the calendar)
      </p>
      <div>
        <input
          type="date"
        />
      </div>

      <p>
        Are you able to communicate (orally and in writing) in English at a native level?
      </p>
      <div className="radios">
        <Radio value={true} label="yes" name="fluentInEnglish" handler={handleChange}/>

        <Radio value={false} label="no" name="fluentInEnglish" handler={handleChange}/>
      </div>

      <div className="form-nav">
        <div></div>
        <Link to="/QnA/causes">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

const QnABasics = ({ handleChange }) => {
  return (
    <div className="QnA-page">
      <p>
        Are you eligible to work in the United States?
      </p>
      <div className="radios">
        <Radio value={true} label="yes" name="eligibleToWorkInUS" handler={handleChange}/>

        <Radio value={false} label="no" name="eligibleToWorkInUS" handler={handleChange}/>
      </div>

      <p>
        What is your highest level of education?
      </p>
      <select
        onChange={handleChange}
        name="education"
        >
        <option value="College">G.E.D.</option>
        <option value="College">High School</option>
        <option value="College">Associates</option>
        <option value="College">Bachelors</option>
        <option value="College">Master</option>
        <option value="College">Ph. D.</option>
      </select>

      <p>
        Are you fluent in English?
      </p>

      <div className="radios">
        <Radio value={true} label="yes" name="fluentInEnglish" handler={handleChange}/>
        <Radio value={false} label="no" name="fluentInEnglish" handler={handleChange}/>
      </div>

      <p>
        Are you fluent in other languages?
      </p>

      <select>
        <option value="languages">Languages</option>
      </select>

      <div className="form-nav">
        <div></div>
        <Link to="/QnA/causes">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

const QnACauses = ({ handleChange }) => {
  return (
    <div className="QnA-page">
      <p>
        What is your highest level of education?
      </p>
      <select
        onChange={handleChange}
        name="education"
        >
        <option value="College">G.E.D.</option>
        <option value="College">High School</option>
        <option value="College">Associates</option>
        <option value="College">Bachelors</option>
        <option value="College">Master</option>
        <option value="College">Ph. D.</option>
      </select>

      <p>
        (For part-time only) Which dats of the week are you available to work? (Select all that apply)
      </p>

      <div className="day-of-week-select">
        <label>Sunday</label>
        <input type="checkbox" value="Sunday" />

        <label>Monday</label>
        <input type="checkbox" value="Monday" />

        <label>Tuesday</label>
        <input type="checkbox" value="Tuesday" />

        <label>Wednesday</label>
        <input type="checkbox" value="Wednesday" />

        <label>Thursday</label>
        <input type="checkbox" value="Thursday" />

        <label>Friday</label>
        <input type="checkbox" value="Friday" />

        <label>Saturday</label>
        <input type="checkbox" value="Saturday" />
      </div>

      <p>
        (For part-time only) What time of day are you available to work?
      </p>

      <div>
      <select name="timezone_offset" id="timezone-offset" className="span5">
        <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
        <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
        <option value="-10:00">(GMT -10:00) Hawaii</option>
        <option value="-09:50">(GMT -9:30) Taiohae</option>
        <option value="-09:00">(GMT -9:00) Alaska</option>
        <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
        <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
        <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
        <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
        <option value="-04:50">(GMT -4:30) Caracas</option>
        <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
        <option value="-03:50">(GMT -3:30) Newfoundland</option>
        <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
        <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
        <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
        <option value="+00:00" selected="selected">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
        <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
        <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
        <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
        <option value="+03:50">(GMT +3:30) Tehran</option>
        <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
        <option value="+04:50">(GMT +4:30) Kabul</option>
        <option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
        <option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
        <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
        <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
        <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
        <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
        <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
        <option value="+08:75">(GMT +8:45) Eucla</option>
        <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
        <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
        <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
        <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
        <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
        <option value="+11:50">(GMT +11:30) Norfolk Island</option>
        <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
        <option value="+12:75">(GMT +12:45) Chatham Islands</option>
        <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
        <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
      </select>
      </div>

      <div className="time-select">
        <input type="time"/>
      </div>

      <p>
        (For part-time only) What are your hourly pay expectations?
      </p>

      <div className="wage-input">
        <p>$</p>
        <input type="number"/>
        <p>/hr</p>
      </div>

      <p>
        (For full-time only) what are your annual salary expectations?
      </p>
      <div className="salary-input">
        <p>$</p>
        <input type="number"/>
      </div>

      <div className="form-nav">
        <Link to="/QnA/basics">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <Link to="/QnA/experience">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

const QnAExperience = ({ handleChange }) => {
  return (
    <div className="QnA-page">
      <p>Your experience</p>
      <p>
        Give a brief description of a project you have worked on that are relevant to this position.
      </p>

      <div className="textarea-div">
        <textarea/>
      </div>

      <p>
        Provide a sample of your past relevant work (e.g. link to an online portfolio or image)
      </p>
      <input/>

      <p>
        All of our jobs are remote. Do you have access to (e.g. a computer, internet connection, a telephone and a private space) to work remotely?
      </p>

      <div className="radios">
        <Radio value={true} label="yes" name="" handler={handleChange}/>

        <Radio value={false} label="no" name="" handler={handleChange}/>
      </div>

      <div className="form-nav">
        <Link to="/QnA/causes">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <Link to="/QnA/expectations">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

const QnAExpectations = () => {
  return (
    <div className="QnA-page">
      <p>
        How many years of relevant work experience do you have for the kind of work you're seeking?
      </p>
      <input type="number"/>

      <p>
        Input all relevant skills you have to the kind of work you are seeking
      </p>

      <p>
        Zip code (we use this to match you to opportunities working on causes your interested in within your local are)
      </p>
      <input type="number" min="0" max="99999"/>


      <div className="form-nav">
        <Link to="/QnA/experience">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <Link to="/dashboard">
          <button className="button-next">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default QnA;