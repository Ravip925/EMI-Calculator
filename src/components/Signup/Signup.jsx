import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import styled from "styled-components";
import { mobile } from "../Responsive";
import Swal from "sweetalert2";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("https://i.ibb.co/jGNbP8M/final-dl-beatsnoop-com-k1w-Yai-RZE9.jpg");

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;
  ${mobile({
    height:"auto",
    padding: "20px",
    backgroundColor:"teal"
  })}
`;
const Wrapper = styled.div`
  width: 900px;
  height: 500px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    ${mobile({
    height:"108vh",
    width:"100%",
    flexDirection: "column",
  })}

`;
const Left = styled.div`
  flex: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3bb19b;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  ${mobile({
      borderTopRightRadius:"10px",
      borderBottomLeftRadius:"0px",
      flex:"0.5"
    })}
  h1 {
    font-weight: 800;
    margin-bottom: 30px;
    ${mobile({
      fontSize:"1.5rem",
      margin:"20px 0"
    })}
  }
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  ${mobile({
      borderBottomLeftRadius:"10px",
      borderTopRightRadius:"0px"
    })}

  h1 {
    font-weight: 800;
  }
`;

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://emi-api-545v.onrender.com/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      Swal.fire(`Signup Failed`)
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sign in
            </button>
          </Link>
        </Left>
        <Right>
          <form className="form_container" onSubmit={handleSubmit}>
            <h1 id="heading-2">Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="input"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="input"
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
              autoComplete="off"
            />
            {error && <div id="err" className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Signup;
