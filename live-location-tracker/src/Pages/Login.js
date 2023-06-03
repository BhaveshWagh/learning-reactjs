import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Geolocate from "./Geolocate";
import "react-toastify/dist/ReactToastify.css";
// import "./signup.css";

const Login = () => {
  const [namelog, setNamelog] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [flag, setFlag] = useState(false);
  const [dash, setDash] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let name = localStorage.getItem("Name").replace(/"/g, "");

    if (!namelog || !password) {
      setFlag(true);
      console.log("Empty");
    } else if (password !== pass || namelog !== name) {
      setFlag(true);
      return toast("User Doesn't Exist.....", { type: "error" });
    } else {
      setDash(!dash);
      setFlag(false);
      navigate("/logged/locate");
    }
  };

  return (
    <div className="bag">
      <Container className="justify-content-center text-center height mid bag">
        <Row
          xs={1}
          md={1}
          className="justify-content-md-center align-self-center bag-color mid"
        >
          {dash ? (
            <form onSubmit={handleSubmit}>
              <Col md="auto">
                <h2 className="cent">Login</h2>
              </Col>
              <div>
                <input
                  name="namelog"
                  value={namelog}
                  className="mar width"
                  placeholder="name"
                  required
                  onChange={(e) => setNamelog(e.target.value)}
                />
              </div>
              <div>
                <input
                  name="pass"
                  value={password}
                  className="mar width"
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                className="mar wid"
                type="submit"
                variant="primary"
                size="sm"
              >
                Login
                {/* <Link to="/login/locate">Login</Link> */}
              </Button>
              <div>
                <p>
                  Don't have an account?
                  <Link className="link" to="/signup">
                    {" "}
                    Signup
                  </Link>
                </p>
              </div>
              <ToastContainer />
            </form>
          ) : (
            <Geolocate />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Login;
