// import avatar from "../../assets/movB.png"
import "./signup.css"
import logo from "../../assets/movblogo1.png"
import logodesign from "../../assets/movBlogo.png"
// import { Userform } from "./Userform"
import App1 from "../../App1"
// import { Formik , Form} from "formik"
// import * as Yup from "yup";

const Signup = () => {
  return (
    <div >
        <div className="signup__main">
            <div className="signup__session">
                <div className="logo__session">
                    <img src={logo} alt="logo" />
                    <img src={logodesign} alt="logo" />
                </div>
                
                {/* this is the text session */}
                <div className="text__session">
                    <h2>Benefits of your free IMDb account</h2>  
                    <p>Personalized Recommendations <br /> Discover shows you will love.</p>
                    <p>Contribute to IMDb <br/>Add data that will be seen by millions of people and get cool badges.
                    </p>
                </div>
            </div>

            
            
                
                <div className="details__session">
                    <div className="detail__container">
                        <div>
                            <h1>Create an account</h1>
                            <p>Let’s get started with your 30 days free trial.</p>
                            
                        </div>
                        <div>
                            {/* <Userform/> */}
                            <App1/>
                        </div>
                        <div>
                            <p>Already have an account ? Log in</p>
                        </div>
                    </div>
                </div>
                
        
        </div>
    </div>
  )
}

export default Signup