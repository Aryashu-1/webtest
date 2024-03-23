import React from "react";
import { NavLink } from "react-router-dom";
// import './Navbar.css'
import Menubar from "../Menubar/Menubar";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
const Navbar = () => {
  let navbar = ["Discover","Community", "Special Deals" , "About Us"];
  let [user,setUser] = useContext(LoginContext)
  function signout(){

    
    setUser([])
    console.log("user loged out");
    
 
  }
  if(user.length != undefined){
    console.log(user.username, "logged in")
    return(<div className="">
    {/* <nav className="flex align-center justify-between p-3">
      <div className="mx-70 align-center flex object-contain">
       <div className="flex"> 
        <h1 className="text-center text-white text-6xl px-2 py-2 font-vibefont">VibeCheck</h1></div>
      </div>
      <ul className="flex justify-center items-center">
      <NavLink to={'/Authorprofile'}  className=" text-white mx-9 text-xl rounded-full p-2 text-center hover: curosr-pointer link hover:text-sky-400"><button onClick={signout}>Welcome,{`${user.Username}`}</button></NavLink> 
          <NavLink to={'/SignIn'}  className=" text-white mx-9 text-xl rounded-full p-2 text-center hover: curosr-pointer link hover:text-sky-400"><button onClick={signout}>Signout</button></NavLink> 
      
      </ul>
    </nav> */}
     <nav className="  align-center justify-between p-5 text-center">
        <div className="flex  align-center flex object-contain">
            <div className="w-[40%]"> 

              <NavLink><h1 className="text-center font-bold text-lg px-2 py-2">PROJECT X</h1></NavLink>
              
            </div>
        
                  <div className="w-[80%] flex">
              <ul >
                {navbar.map((buttons, index) => (
                <NavLink className="bg-white text-blue-700 mx-3  rounded-full p-2 text-center hover: curosr-pointer hover :underline underline-offset-1link"  to={buttons}> {buttons}
                </NavLink>  
                  
                ))}
                
       <NavLink to={'/profile'}  className=" bg-white text-blue-700 mx-3  rounded-full p-2 text-center hover: curosr-pointer hover :text-underline link"><button onClick={signout}>{`${user.username}`}</button></NavLink> 
          <NavLink to={'/SignIn'}  className=" bg-white text-blue-700 mx-3  rounded-full p-2 text-center hover: curosr-pointer hover :text-underline link"><button onClick={signout}>Signout</button></NavLink> 
      
      </ul>
              
            </div>
        </div>
      </nav>
  </div>);
  }

  return (
    <div className=" align-center justify-between p-3 text-center">
      {/* <header className="m-2">
      <nav className="px-4">
            
            <h4 className="text-3xl font-bold">MR.travel</h4>
            <ul clasName='text-xl' id="menu_bx">
                <li><a className="text-lg" href="#">Discover</a></li>
                <li><a className="text-lg" href="#">Community</a></li>
                <li><a className="text-lg" href="#">Special Deals</a></li>
                <li><a className="text-lg" href="#">About US</a></li>
                <li><a  className="text-lg" href="/Signup">Register</a></li>
            </ul>
            <i className="bi bi-three-dots"></i>
        </nav>
        </header>
    */}
    <nav className="  align-center justify-between p-5 text-center">
        <div className="flex  align-center flex object-contain">
            <div className="w-[40%]"> 

              <NavLink to={'Home'}><h1 className="text-center font-bold text-lg px-2 py-2">PROJECT X</h1></NavLink>
              
            </div>
        
                  <div className="w-[60%] flex">
              <ul >
                {navbar.map((buttons, index) => (
                <NavLink className="bg-white text-blue-700 mx-3  rounded-full p-2 text-center hover: curosr-pointer hover :text-underline link"  to={buttons}> {buttons}
                </NavLink>  
                  
                ))}
                <NavLink to={'/Signin'} className=' text-white bg-black mx-3  rounded-full p-3 text-center hover: curosr-pointer hover :text-underline link'>Register</NavLink>
              </ul>
            </div>
        </div>
      </nav>
</div>
  
  );
};

export default Navbar;
