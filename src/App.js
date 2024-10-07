// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AuthForm from './components/login/AuthForm';
// import { Navbar } from './components/Navbar/Navbar';
// // import { About,  Home, Dashboard, Blogs } from './components/pages';
// import {About,Home,Blogs} from './components/pages/'
// import dashboard from './components/dashboard/Dashboard.js'
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   console.log(loggedIn, '====loggedIn')
//   return (
//     <div className="main">
//       <Router>
//         {loggedIn && (
//           <Navbar
//             loggedIn={loggedIn}
//             setLoggedIn={setLoggedIn}
//           />
//         )}
//         <Routes>
//           {loggedIn ? (
//             <>
//               <Route
//                 path="/"
//                 element={<Home />}
//               />
//               <Route
//                 path="/about"
//                 element={<About />}
//               />
//               <Route
//                 path="/dashboard"
//                 element={<Dashboard />}
//               />
//               {/* <Route
//                 path="/contact"
//                 element={<Contact />}
//               /> */}
//               <Route exact
//                 path="/addblog"
//                 element={<  Blogs />}
//               />
//             </>
//           ) : (
//             <Route
//               path="/auth"
//               element={
//                 <AuthForm
//                   loggedIn={loggedIn}
//                   setLoggedIn={setLoggedIn}
//                 />
//               }
//             />
//           )}
//           {/* Redirect to home if the user is logged in and tries to access the auth route */}
//           <Route
//             path="*"
//             element={
//               loggedIn ? (
//                 <Home />
//               ) : (
//                 <AuthForm
//                   loggedIn={loggedIn}
//                   setLoggedIn={setLoggedIn}
//                 />
//               )
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/login/AuthForm';
import { Navbar } from './components/Navbar/Navbar';
import { Home} from './components/pages';
import  WriteBlog from "./components/WriteBlog/WriteBlog"
import Dashboard from './components/dashboard/Dashboard'; // Correct import
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  console.log(loggedIn, '====loggedIn')
  return (
    <div className="main">
      <Router>
        {loggedIn && (
          <Navbar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        )}
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/dashboard" element={<Dashboard />} /> {/* Use Dashboard component */}
              <Route exact path="/writeBlog" element={<WriteBlog />} />
            </>
          ) : (
            <Route
              path="/auth"
              element={
                <AuthForm
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
          )}
          <Route
            path="*"
            element={
              loggedIn ? (
                <Home />
              ) : (
                <AuthForm
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
