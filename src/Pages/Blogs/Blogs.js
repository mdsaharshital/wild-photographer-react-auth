import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-2 ">My Blogs</h1>
      <div className="row g-2 m-2">
        <div className="border p-3 col-12 col-md-6 col-lg-6 ">
          <h3>
            What other services does firebase provide other than authentication?
          </h3>
          <p>
            <span className="fw-bolder">Answer:</span> FireBase provides many
            other services which are given below:
          </p>
          <ul>
            <li>Realtime database</li>
            <li>Remote Config</li>
            <li>Firebase Ml</li>
            <li>Cloud functions</li>
            <li>Authenticaion</li>
            <li>Cloud Messaging</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
          </ul>
        </div>
        <div className="border p-3 col-12 col-md-6 col-lg-6 ">
          <h3>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p>
            <span className="fw-bolder">Answer:</span> I personaly use firebase
            for hosting and authentication . Because it is easy to hadnle and
            understand than other services and , i easily can authenticate and
            host at the same time without doing extra config file that i had to
            do before with Netlify. other services which are given below:
          </p>
          <ul>
            <li>Auth )</li>
            <li>passport</li>
            <li>MongoDb</li>
            <li>Okta</li>
            <li>JSonWeb Token</li>
            <li>Amazin Cognito</li>
            <li>Keyclock</li>
          </ul>
        </div>
        <div className="border p-3 col-12 col-md-6 col-lg-6">
          <h3>Difference between authorization and authentication?</h3>
          <p>
            <span className="fw-bolder">Answer:</span> Authentication is the act
            of confirming a person's identity, whereas authorisation is the
            process of confirming a user's access to certain apps, files, and
            data. Authentication and authorisation serve the same purpose in the
            digital age. Authentication is a technique for ensuring that people
            are who they say they are. After this has been verified,
            authorisation is used to provide the user authority to access
            various levels of information and execute certain duties, based on
            the rules defined for various sorts of users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
