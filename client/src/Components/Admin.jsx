import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Admin = () => {

  const [data, setData] = useState();

  const getData = () => {
    axios.get("https://voater-backend-app.onrender.com/v1/authlist").then((res) => {
      console.log(res);
      setData(res.data.Data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return 
    // {<div>
    //     {data?.map((val, ind) => (
    //       <div key={ind}>
    //         <h1>{val.Email}</h1>
    //         <h2>{val.title}</h2>
    //         <h3>{val.author}</h3>
    //       </div>
    //     ))}
    //   </div>}
  
}
