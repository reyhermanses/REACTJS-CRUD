import React from 'react';

import ReactDOM from "react-dom/client";
// import {default as User} from "./views/user/user";
import {default as App} from './App';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }


// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// function User(props){

// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);