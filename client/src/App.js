import './App.css';
import { Table } from 'react-bootstrap'
import axios from 'axios'

import React, { useState, useEffect } from 'react';

// const fetchData = (limit, skip) => {
//   fetch(`/?limit=${limit}&skip=${skip}`)
//   .then((res) => {
//     this.setState({
//       data : res
//     })
//   })
// }

function App() {

  // we have list of objects
  const [data , setData] = useState( 
    [{
        full_name: '',
        email: '',
        number: null,
        city: '',
        url: '',
        output: [{
            team_name: ''
        }]
    }]
);


  useEffect( () => {
  fetch('/data').then(res => {
      if(res.ok) {
        return res.json();
      } 
    }).then(jsonRes => setData(jsonRes));
  },[data]);


  return (
    
    <div className="App">
      
      <h1>Data</h1>
            <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Team Name</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>City</th>
                <th>Url</th>
            </tr>
            </thead>
            <tbody>
              {data.map(item => {
                return (
                  <tr>
                    {item.output.map(ele => {
                      return <td>{ele.team_name}</td>
                    })}
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.city}</td>
                    <td>{item.url}</td>
                  </tr>
                )
              })}
                
           </tbody>
          </Table>  
    </div>
  );
}

export default App;
