import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./Login.css";
import MailIcon from "@mui/icons-material/Mail";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Login() {
  const navigate = useNavigate();

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://saaskit.tegain.com/auth/jwt/create/", {
        username,
        password,
      })
      .then((result) => {
        console.log(result.data);
        console.log("acess", result.data.data.access);

        navigate("/home");
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("username", JSON.stringify(username));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Row>
      <Helmet>
        <title> Login</title>
      </Helmet>
      <Col md={6} lg={6} xl={8} className="login-pic">
        <div className="headLine">
          <h5 className="h5" style={{ "font-weight": "900" }}>
            Go Finance
          </h5>
          <h6>The most popular peer to peer lending to SEA</h6>
        </div>
      </Col>
      <Col sm={12} md={6} lg={6} xl={4} className="">
        <Container className="login_form">
          <Form className="form">
            <Form.Label style={{ "font-weight": "900" }}>HELLO</Form.Label>{" "}
            <br />
            <Form.Label>signup to get started</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                iconEnd={<MailIcon />}
                placeholder="Enter username"
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}

export default Login;
