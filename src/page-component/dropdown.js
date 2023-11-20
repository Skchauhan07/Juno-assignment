import React, { useEffect, useState } from 'react';
import MyTable from './Table';

function MyDropDown() {
//   const [risk, setRisk] = useState("");
//   const [reason, setReason] = useState("");

//   console.log(risk, reason);

  return (
//     <>
//     <div className='row'>
//     <div className='col'>
//     <select class="form-control form-control-lg" onChange={(e) => {
//         setRisk(e.target.value)
//     }}>
//       <option>easy</option>
//           <option>medium</option>
//           <option>hard</option>
// </select>
//     </div>
//     <div className='col'>
//     <select class="form-control form-control-lg" onChange={(e) => {
//         setReason(e.target.value)
//     }}>
//       <option>Reason</option>
//           <option>ipaddress</option>
//           <option>fifo</option>
// </select>
//     </div>
//     <div className='col'>

//     </div>
//     </div>


    <MyTable/>

        //   </>
        );
}

export default MyDropDown;