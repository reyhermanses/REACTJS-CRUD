import React from 'react';

const SecondPage = props => {
  return (
    <div>
      <h3>Second Page View</h3>
      <p> This is the SP view of SPA</p>
    </div>
  );
};

export default SecondPage;

// export function SecondPage(){
//   return (
//         <div>
//           <h3>Second Page View</h3>
//           <p> This is the home view of SPA</p>
//         </div>
//       );
// }

// export class SecondPage extends React.Component {
//   render() {
//     return <p>Exported SecondPage</p>;
//   }
// }