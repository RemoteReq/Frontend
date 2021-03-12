import 'react';

const JobFormPart2 = () => {
  return (
          <div>

            <label>Company Logo</label>
            <div className="image-box">
              <img src={companyLogo || ''}/>
            </div>

            <label>Company Website</label>
            <input
              readOnly
              defaultValue={jobData.companyWebsite}
            />

            <label>Hourly Wage</label>
            <input
              type="number"
              name="hourlyWage"
              onChange={handleNumber}
            />
            <p className={`${fields.hourlyWage.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

            <label>Number of Hours Desired per Week</label>
            <input
              type="number"
              name="numberOfHours"
              onChange={handleNumber}
            />
            <p className={`${fields.numberOfHours.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

            <div className="range">
              <label>Minimum Years of Experience Required</label>
              <input
                type="number"
                name="minExperience"
                onChange={handleNumber}
              />
              <p className={`${fields.minExperience.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

              {/* <label>Maximum Years of Experience Required</label>
              <input
                type="number"
                name="maxExperience"
                onChange={handleNumber}
              />
              <p className={`${fields.maxExperience.isFilled ? 'hide' : 'error'}`}>This is a required field.</p> */}
            </div>

            <EducationSelector handleChange={handleNumber} name="requiredEducationLevel"/>
            <p className={`${fields.requiredEducationLevel.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

          <div className="select">
            <label>State</label>
            <select name="location" onChange={handleChange}>
              <option>-----</option>
              {
                locations.map((state, i) => {
                  return (
                    <option key={i} value={state}>
                      {state}
                    </option>
                  );
                })
              }
            </select>
            <p className={`${fields.location.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>
          </div>

          <div>
            <label>Zip Code</label>
            <input
              type="number"
              name="zipCode"
              onChange={handleNumber}
            />
            <p className={`${fields.location.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>
          </div>

            <TimeZoneSelector handleChange={handleChange}/>
            <p className={`${fields.timeZone.isFilled ? 'hide' : 'error'}`}>This is a required field.</p>

            <div className="notification-settings">
              <h3>Notification Settings</h3>
              <p className="small-paragraph">
                We will email you when your matching criteria is met. Let us know, when you would like to hear from us.
              </p>

              <div className="sliders">
                <label>Number of Candidates</label>
                <div className="slider">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    name="numberOfCandidate"
                    defaultValue="1"
                    onChange={handleNumber}
                    />
                  <input
                    value={jobData.numberOfCandidate}
                    readOnly
                    />
                </div>

                <label>Percentage Match</label>
                <div className="slider">
                <input
                  type="range"
                  min="50"
                  max="100"
                  step="1"
                  name="percentageMatch"
                  defaultValue="50"
                  onChange={handleNumber}
                  />
                <input
                  value={`${jobData.percentageMatch} %`}
                  readOnly
                  />

                <label>Show candidates that are eligible to work in the United States</label>
                <input
                  type="checkbox"
                  name="eligibleToWorkInUS"
                  value={true}
                  onChange={handleChange}
                />

                <label>Show candidates that are fluent in English</label>
                <input
                  type="checkbox"
                  name="fluentInEnglish"
                  value={true}
                  onChange={handleChange}
                />
                </div>
              </div>
            </div>

          </div>
        </div>
  );
};

export default JobFormPart2;