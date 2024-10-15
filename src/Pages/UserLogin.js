import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import './UserLogin.css';
function UserLogin() {
  
  const [errorBox] = useState()
  const [errorPassword] = useState()
  const [passwordVisible, setpasswordVisible] = useState(false)
  const [errorName] = useState()
  const [username, setName] = useState()
 
  const [errorEmail] = useState("")

  const [password, setPassword] = useState()


 
  const navigate = useNavigate()

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/userDetails")
  //     .then((res) => {
  //       setadminData(res.data);
  //       console.log("res", res.data)
  //     })
  //     .catch((error) => console.log(error));
  // }, []);


  const handleChange = (e, keyword) => {
    if (keyword === "name") {
      setName(e.target.value);
      //console.log(e.target.value)
    } else if(keyword==="password"){
    console.log(e.target.value)
      setPassword(e.target.value);
    } 
    
  }
  const handleClick = (e) => {
    e.preventDefault()
    let obj={username:username,password:password}
    console.log(obj)
    axios.post("https://lyrosbackendexpress.onrender.com/v1/login",obj,{withCredentials:true}).then((res)=>{
      console.log(res.data)
      localStorage.setItem("accesstoken",res.data.token)
      navigate("/managecontacts")
    }).catch((err)=>console.log(err))
    
  }
  const togglePasswordVisibility = () => {
    setpasswordVisible(!passwordVisible);
  }
  return (
    <div className="adminLoginContainer">
      <h1>User/Login</h1>
      <div>
        <div>
          <form>
            <div className="loginpage">
              <div className="form-container">
                {/* <h1 className="main-heading">Admin/Login</h1> */}
                <div>
                  <label className="heading" htmlFor="name">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {errorName}
                  </p>
                </div>
                <div>
                  <label className="heading" htmlFor="email">
                    Email :
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="signupemail"
                    placeholder="Enter your email"
                    onChange={(e) => handleChange(e, "email")}
                  />
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {errorEmail}
                  </p>
                </div>
                <div>
                  <label className="heading" htmlFor="password">
                    Password :
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type={passwordVisible ? "text" : "password"} // Step 3: Toggle input type
                      id="password"
                      placeholder="Enter your Password"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    <span
                      onClick={togglePasswordVisibility} // Step 3: Add click handler
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                    </span>
                  </div>
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {errorPassword}
                  </p>
                </div>

                <div>
                  <label className="heading" htmlFor="file">
                    Choose Photo :
                  </label>
                  <br></br>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => handleChange(e, "photo")}
                  />
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                  </p>
                </div>

                <div>
                  <div className="checkbox">
                    <div>
                      <input
                        type="checkbox"
                        onChange={(e) => handleChange(e, "checkbox")}
                      />
                      <label className="checkboxtext"> Remember Me</label>
                    </div>
                  </div>
                  <p style={{ color: "red" }}>{errorBox}</p>
                </div>
                <div className="button-container">
                  <button
                    className="button"
                    onClick={(e) => handleClick(e)}
                  >
                    LogIn
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default UserLogin