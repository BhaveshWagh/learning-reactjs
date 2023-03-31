import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios";

import MyCard from './MyCard'
function App() {
  // store data somewhere
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/");
    // if u are not comfortable with {data} then declare one varibal like below and use it
    // const newData = response.data
    console.log("RESPONSE: ", data.results);

    const details = data.results[0]
    setDetails(details)
  };
  // fire a api through useEffect
  useEffect(() => {
    fetchDetails()
  }, []);
  return (
    <Container fluid className="p-4 bg-primary App">
    <Row>
    <Col md={4} className="offset-md-4 mt-4">
    <MyCard/>
    </Col>
    </Row>
    
    </Container>
  );
}

export default App;
