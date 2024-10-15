import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './UserSignUp.css';
function UserSignIn() {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [errorName] = useState("")
    const [errorEmail] = useState("")
    const [errorPassword] = useState("")
    const [number, setnumber] = useState()
    const [errorNumber] = useState()
    const [successfulmsg] = useState("")
    // const [create, setCreate] = useState("please create an account!")
    // const [adminData, setadminData] = useState([])
    // const [isin, setisin] = useState()

    const navigate = useNavigate()
    const handleChange = (e, keyword) => {
        e.preventDefault();
        if (keyword === "name") {
            setName(e.target.value);
        } if (keyword === "password") {
            setPassword(e.target.value)
        } if (keyword === "email") {
            setemail(e.target.value);
        }
        if (keyword === "number") {
            setnumber(e.target.value);
        }

    }
    const handleClick = (e) => {
        e.preventDefault()
        console.log(number,email)
        axios.post("https://lyrosbackendexpress.onrender.com/v1/signup",{
            username:name,
            email:email,
            password:password,
            number:number
        }).then((res)=>navigate("/managecontacts")).catch((err)=>console.log(err))

    }

    return (
        <>
            {/* {adminPhoto&& <img src={URL.createObjectURL(adminPhoto)} />} */}
            {/* <img src={image} /> */}
            <div >
                <div className="adminSignupForm">
                    <h1 className="errormsg">
                        Please create an account!
                    </h1>
                </div>

                <div>
                    <div>
                        <form>
                            <div className="adminSignupFormcontainer">
                                <div className="formBackGround">
                                    <h1 className="signupheading">User/SignUp</h1>
                                    <div>
                                        <label className="heading" htmlFor="name">
                                            Name :
                                        </label>
                                        <br></br>
                                        <input
                                            type="text"
                                            id="signupname"
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
                                        <br></br>
                                        <input
                                            type="password"
                                            id="signuppassword"
                                            placeholder="Enter your Password"
                                            onChange={(e) => handleChange(e, "password")}
                                        />
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
                                        <label className="heading" htmlFor="number">
                                            Phone Number :
                                        </label>
                                        <br></br>
                                        <input
                                            type="text"
                                            id="signupnumber"
                                            placeholder="Enter Your  Phone Number"
                                            onChange={(e) => handleChange(e, "number")}
                                        />
                                        <p
                                            style={{
                                                color: "red",
                                                fontWeight: "bolder",
                                                fontSize: "18px",
                                            }}
                                        >
                                            {errorNumber}
                                        </p>
                                    </div>


                                    <div className="button-box">
                                        <button
                                            className="createbutton"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                    <p
                                        style={{
                                            color: "green",
                                            fontWeight: "bolder",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {successfulmsg}
                                    </p>
                                </div>
                                <div>
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="dispimage" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="adminSignupForm">
                </div>
            </div>
        </>
    )
}
export default UserSignIn


