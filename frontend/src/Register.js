import React,{useState} from "react";
import "./css/CustomerLogin.css";
import "./css/CustomerRegister.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export const Register=({collection,endpoint})=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [repassword,setRepassword]=useState("")
    const [msg,setMsg]=useState("")
    const [msg1,setMsg1]=useState("")
    const [validation1,setValidation1]=useState(true)
    var message1="";
    var message="";
    const navigate=useNavigate()
    const handleSubmit=(e)=>
    {
        const valid1=validate();
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(repassword)
        var valid2;
        if(valid1)
        {
            valid2=confirmValidation();
        }
        console.log("password is "+password);
        console.log("confirm password  is "+repassword);
        console.log(message);
        console.log(message1);
        if(valid2){
            Registration();
        }
    }

    //api
    const Registration=()=>{
        let user={username1:username,email1:email,password1:password}
        const {username1,email1,password1}=user;
        //user.token="";
        if(username1&&email1&&password1){
            axios.post(endpoint,user)
            .then((res)=>{
                console.log("response is ",res)
                console.log(res.data.message)
                if(res.data.message1=="nouser")
                {
                    alert("User already exists please Login")
                }
                else
                {
                    alert("Registration is successful")
                }
            })
            .catch(error => console.error(error));
            //alert(password1)
            console.log(endpoint)
            console.log(collection)
        }
        else{
            alert("invalid")
        }
    }
    const confirmValidation=()=>
    {
        var isValid1=false;
        if(password!==repassword)
        {
            message1="Password does not match, Please re-enter the password. ";
        }
        else
        {
            isValid1=true;
        }
        setMsg1(message1)
        return isValid1;
    }
    const validate=()=>
    {
        var isValid;
        var format1 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        var format2= /[A-Z]/;
        var format3= /[0-9]/;
        if(password==="")
        {
            isValid=false;
            message="Please enter password.";
        }
        else if(password.length<8)
        {
            isValid=false;
            message="Please enter atleast 8 characters.";
        }
        else if(!password.match(format1)){
            isValid=false;
            message="Please enter some special character.";
        }
        else if(!password.match(format2)){
            isValid=false;
            message="Please enter some UpperCase letter.";
        }
        else if(!password.match(format3)){
            isValid=false;
            message="Please enter some digit.";
        }
        else{
            isValid=true;
            message=""
        }
        setMsg(message);
        console.log("isValid"+isValid);
        setValidation1(isValid);
        console.log("validation1 is nikitha"+validation1);
        return isValid;
    }
    return(
        <div className="form-container">
        <h2>Register For {collection}</h2>
        <form className="form-element">
            <label htmlFor="username">UserName</label>
            <input type="text" placeholder="John" required value={username} name="username" id="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="yourmail@gmail.com" required value={email} name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
            <label htmlFor="password">Password</label>
            <input type="password" className={{validation1}?"errorFree":"error"} placeholder="********" name="password" value={password} id="password" onChange={(e)=>setPassword(e.target.value)}></input>            
            <small value={msg} className="errorMsg">{msg}</small>
            <label htmlFor="confirm password">Confirm Password</label>
            <input type="password" placeholder="********" name="repassword" value={repassword} id="repassword" onChange={(e)=>setRepassword(e.target.value)}/>
            <small value={msg1} className="errorMsg">{msg1}</small>
            <button type="submit" className="submit-button" onClick={handleSubmit}>Register</button>
        </form>
        <button onClick={()=>navigate("/login")} className="link-btn">Already have an account? Login here!</button>
        </div>
    )
}