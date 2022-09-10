import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/second-page">Second Page</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;

// export function NavBar(){
//       return (
//     <div>
//       <h5>NAVBAR</h5>
//       <ul>
//         <li><Link to="/Home">Home</Link></li>
//         <li><Link to="/SecondPage">Second Page</Link></li>
//      	</ul>
//       <hr />
//     </div>
//   );
// }