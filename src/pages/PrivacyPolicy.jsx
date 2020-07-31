import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <form>
        <h3>Privacy Policy</h3>

        <h4>Effective date: July 20, 2020</h4>

        <p className="smaller-paragraph">
          At RemoteReq, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal information. By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.
          Remember that your use of RemoteReq’s Services is at all times subject to our Terms of Use, which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.
          If you have a disability, you may access this Privacy Policy in an alternative format by contacting kbryant@remotereq.com.
        </p>

        <h4>What this Privacy Policy Covers</h4>

        <p className="smaller-paragraph">
        This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. “Personal Data” means any information that identifies or relates to a particular individual and also includes information referred to as “personally identifiable information” or “personal information” under applicable data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we don’t own or control or people we don’t manage.
        </p>

        <div className="table">


        </div>

        <table>
          <tr>
            <th></th>
            <th>Category of Personal Data</th>
            <th>Personal Data Collected</th>
            <th>What is the source of this Personal Data?</th>
          </tr>

          <tr>
            <td>A</td>
            <td>Personal identifiers
              Examples: Real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name
            </td>
            <td>
              Email address
              First and last name
              Postal address
              IP address
            </td>

            <td>
              You /
              Third Parties
            </td>
          </tr>

          <tr>
            <td>B</td>
            <td>
              Customer records identified by state law (including the California Customer Records statute (Cal. Civ. Code § 1798.80(e)))
              Name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver’s license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number or any other financial information, medical information or health insurance information.
            </td>
            <td>
              Phone number
              Certifications
              Educational background
              Employment history
            </td>
            <td>
              You /
              Third Parties
            </td>


          </tr>
        </table>
      </form>
    </div>
  );
};

export default PrivacyPolicy;