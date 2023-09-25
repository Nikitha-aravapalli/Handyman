import "./css/ResetPassword.css";
import {useState} from "react";
import axios from "axios";
export const ResetPassword=({collection,endpoint})=>{
    const [user,setUser]=useState({email:"",password:"",resetPassword:""})
    const [message1,setmessage1]=useState("");
    const [message2,setmessage2]=useState("");
    const [message3,setmessage3]=useState("");
    const [message,setmessage]=useState("");

    const updateDetails=(event)=>{
        const {name,value}=event.target;
        //console.log({name},{value})
        setUser({...user,[name]:value})
    }

    const update=(event)=>{
        console.log("email is",user.email);
        console.log("password is",user.password);
        console.log("Reset password is",user.resetPassword);
        event.preventDefault()
        var isValid=false;
        var format1 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        var format2= /[A-Z]/;
        var format3= /[0-9]/;
        if(user.email===""){
            isValid=false;
            setmessage1("email is required");
            console.log("message is",message1);
        }
        else if(user.password==="")
        {
            isValid=false;
            setmessage2("Please enter password.");
            console.log("message is",message);
        }
        else if(user.password.length<8)
        {
            isValid=false;
            setmessage2("Please enter atleast 8 characters.");
            console.log("message is",message2);
        }
        else if(!user.password.match(format1)){
            isValid=false;
            setmessage2("Please enter some special character.");
            console.log("message is",message);
        }
        else if(!user.password.match(format2)){
            isValid=false;
            setmessage2("Please enter some UpperCase letter.");
            console.log("message is",message);
        }
        else if(!user.password.match(format3)){
            isValid=false;
            setmessage2("Please enter some digit.");
            console.log("message is",message);
        }
        else if(user.password!==user.resetPassword)
        {
            isValid=false;
            setmessage3("password is not matching.");
            console.log("message is",message3);
        }
        else{
            isValid=true;
            setmessage("u can send data safely");
            console.log("message is",message);
        }
        if(isValid==true){
            setmessage("u can send data safely");
            console.log("collection is" ,collection);
            console.log("endpoint is ",endpoint);

            //sending data to the backend
            axios.put(endpoint,user)
            .then((res)=>{
                console.log("nikitha",res.data.response)
            }
            )
            .catch((err)=>{
                console.log("error occured",err);
            }
            )
        }
    }

    return(
        <div className="Reset">
        <h2>Reset Your Password</h2>
        <form className="resetContainer">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="yourmail@gmail.com" name="email" id="Mail" value={user.email} onChange={updateDetails}>
            </input>
            <small>{message1}</small>
            <label htmlFor="Change" name="password">Change Password</label>
            <input type="password" name="password" placeholder="********" id="Change"value={user.password} onChange={updateDetails}></input>
            <small>{message2}</small>
            <label htmlFor="Confirm" name="resetPassword">Confirm Password</label>
            <input type="password" name="resetPassword" placeholder="********" id="Confirm" value={user.resetPassword} onChange={updateDetails} ></input>
            <small>{message3}</small>
            <button type="submit" onClick={update} className="resetButton">Reset Password</button>
        </form>
        </div>
    )
}