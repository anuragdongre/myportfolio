// import React, { useState, useEffect } from 'react'
// // import ScrollAnimation from 'react-animate-on-scroll';
// import { FaGithubSquare } from 'react-icons/fa'


// function Contributions() {
//   const [showComponent, setShowComponent] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowComponent(true);
//     }, 1000);

//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div className='Container' style={{ marginTop: '5rem' }}>
//       <div className="SectionTitle" style={{ display: 'flex', alignItems: "center", flexWrap: 'wrap' }}>My Contributions&nbsp;{<FaGithubSquare />} </div>
//       <div className="BigCard" style={{ padding: '0 10px 10px 10px' }}>
//         <dic animateIn="fadeIn" >
//           {showComponent && <img alt="github contributions" src={"https://raw.githubusercontent.com/salesp07/salesp07/output/github-contribution-grid-snake.svg?sanitize=true"} />}
//         </dic>
//       </div>
//     </div>
//   )
// }

// export default Contributions