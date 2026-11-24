// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App




import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Review from "./components/Review";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    country: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const next = () => setStep((current) => current + 1);
  const previous = () => setStep((current) => current - 1);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      country: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setStep(1);
    setSubmitted(false);
  };

  return (
    <div className="page">
      <div className="form-card">
        <div className="heading">
          <h1>Create Your Account</h1>
          <p>Complete each step to submit your information.</p>
        </div>

        {!submitted && (
          <>
            <div className="progress-steps">
              {["Personal", "Details", "Account", "Review"].map(
                (label, index) => (
                  <div
                    className={`progress-item ${
                      step >= index + 1 ? "active" : ""
                    }`}
                    key={label}
                  >
                    <div className="step-circle">
                      {index + 1}
                    </div>
                    <span>{label}</span>
                  </div>
                )
              )}
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </>
        )}

        <div className="form-content">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Form Submitted Successfully!</h2>
              <p>Your information has been submitted.</p>
              <button onClick={handleReset}>Fill Another Form</button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <Step1 data={data} setData={setData} next={next} />
              )}

              {step === 2 && (
                <Step2
                  data={data}
                  setData={setData}
                  next={next}
                  previous={previous}
                />
              )}

              {step === 3 && (
                <Step3
                  data={data}
                  setData={setData}
                  next={next}
                  previous={previous}
                />
              )}

              {step === 4 && (
                <Review
                  data={data}
                  previous={previous}
                  submit={handleSubmit}
                />
              )}
            </>
          )}
        </div>

        {!submitted && (
          <p className="footer-note">
            Step {step} of 4 · Your information stays in this form.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;