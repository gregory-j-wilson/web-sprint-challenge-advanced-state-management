import React, {useState} from "react";
import "./App.css";
import {connect} from 'react-redux'
import {getSmurfs} from '../Actions'
import axios from 'axios'

const initialFormValues = {
  name: '',
  age: '',
  height: ''
}


function App(props) {


  const [formValues, setFormValues] = useState(initialFormValues)


  const handleChange = e => {

    setFormValues( {
      ...formValues,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.height]: e.target.value
      
    });
  };



  const postSmurf = (e) =>  {
    e.preventDefault()
    console.log(formValues)
    axios
        .post('http://localhost:3333/smurfs', formValues)
        .then(res => {
          console.log(res.data)
            return res.data
            
        })

        .catch(err => {
            console.log(err)
        })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
}

  
  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <button onClick={() => {props.getSmurfs()}}>See the Smurfs!</button>
        <div>{props.smurfs.map( (smurf) => {
          return <div><h3>{smurf.name}</h3>
                  <p>Age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
                  </div>

        })}</div>


        <div className="form">
        <h2>Add a new smurf!</h2>
        <form onSubmit={postSmurf}>
          <label htmlFor="name">Name:</label>
          <input 
            id="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            ></input>

            <br></br>

          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="text"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            ></input>
          
            <br></br>

          <label htmlFor="height">Height:</label>
          <input
            id="height"
            type="text"
            name="height"
            value={formValues.height}
            onChange={handleChange}
            ></input>

          <br></br>
          <br></br>

            <button type="submit">Add New Smurf</button>


        </form>
        </div>
        
      </div>
    );
  
}

const mapStateToProps = state => {

  return {
    smurfs: state.smurfs,
    error: state.error
  }

}

export default connect(mapStateToProps, {getSmurfs})(App)
