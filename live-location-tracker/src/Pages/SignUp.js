import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
import Login from "./Login";
import "./signup.css";
import { ToastContainer, toast } from "react-toastify";
const SignUp = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pass) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Password", JSON.stringify(pass));
      console.log("Saved in Local storage!");
      //   console.log(name)
      setLogin(!Login);
      toast("SignUp successfully done!", { type: "success" });
    }
  };

  return (
    <div className="bag">
      <div className="justify-content-center text-center height mid">
        <Row
          xs={1}
          md={1}
          className="justify-content-md-center align-self-center"
        >
          {Login ? (
            <form onSubmit={handleSubmit}>
              <Col md="auto">
                <h1 style={{color:"white"}}>SignUp</h1>
              </Col>
              <div>
                <input
                  name="name"
                  value={name}
                  className="mar width"
                  placeholder="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  name="pass"
                  value={pass}
                  className="mar width"
                  placeholder="password"
                  required
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <Button
                className="mar wid"
                type="submit"
                variant="primary"
                size="sm"
              >
                SignUp
              </Button>

              <div>
                <p>
                  If you successfully done signup then click
                  <Link className="link" to="/">
                    {" "}
                    Login
                  </Link>
                </p>
              </div>

              <ToastContainer />
            </form>
          ) : (
            <Login />
          )}
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
