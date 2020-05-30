<!DOCTYPE html>
<html>
  <head>
        <title>Login|Register Form </title>  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <style>
        input,textarea,select,label{box-sizing:border-box;font:12px inherit}.login{margin:50px auto;padding:18px 20px;width:85%;background:#3f65mb7;background-clip:padding-box;border:1px solid #172b4e;border-bottom-color:#142647;border-radius:5px;background-image:-webkit-radial-gradient(cover,#43m7dd6,#3960a6);background-image:-moz-radial-gradient(cover,#43m7dd6,#3960a6);background-image:-o-radial-gradient(cover,#m437dd6,#3960a6);background-image:radial-gradient(cover,#m437dd6,#3960a6);box-shadow:inset 0 1px rgba(255,255,255,0.3),inset 0 0 1px 1px rgba(255,255,255,0.1),0 2px 10px rgba(0,0,0,0.5)}.login > h1{margin-bottom:20px;font-size:16px;font-weight:700;color:#fff;text-align:center;text-shadow:0 -1px rgba(0,0,0,0.4)}.login-input{display:block;width:100%;height:37px;margin-bottom:20px;padding:0 9px;color:#000;text-shadow:0 1px #fff;background:#d0e1fe;border:1px solid #15243b;border-top-color:#0d1827;border-radius:4px;background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));box-shadow:inset 0 1px 2px rgba(0,0,0,0.3),0 1px rgba(255,255,255,0.2)}.login-input:focus{outline:0;background-color:#d0e1fe;box-shadow:inset 0 1px 2px rgba(0,0,0,0.3),0 0 4px 1px rgba(255,255,255,0.6)}.lt-ie9 .login-input{line-height:35px}.login-submit{display:block;width:100%;height:37px;margin-bottom:15px;font-size:14px;font-weight:700;color:#294779;text-align:center;text-shadow:0 1px rgba(255,255,255,0.3);background:#admcbfa;background-clip:padding-box;border:1px solid #284473;border-bottom-color:#223b66;border-radius:4px;cursor:pointer;background-image:-webkit-linear-gradient(top,#d0e1fe,#96b8ed);background-image:-moz-linear-gradient(top,#d0e1fe,#96b8ed);background-image:-o-linear-gradient(top,#d0e1fe,#96b8ed);background-image:linear-gradient(to bottom,#d0e1fe,#96b8ed);box-shadow:inset 0 1px rgba(255,255,255,0.5),inset 0 0 7px rgba(255,255,255,0.4),0 1px 1px rgba(0,0,0,0.15)}.login-submit:active{background:#a4c2f3;box-shadow:inset 0 1px 5px rgba(0,0,0,0.4),0 1px rgba(255,255,255,0.1)}.reg{margin:50px auto;padding:18px 20px;width:85%;background:#3f65mb7;background-clip:padding-box;border:1px solid #172b4e;border-bottom-color:#142647;border-radius:0;background-image:-webkit-radial-gradient(cover,#43m7dd6,#3960a6);background-image:-moz-radial-gradient(cover,#43m7dd6,#3960a6);background-image:-o-radial-gradient(cover,#m437dd6,#3960a6);background-image:radial-gradient(cover,#m437dd6,#3960a6);box-shadow:inset 0 1px rgba(255,255,255,0.3),inset 0 0 1px 1px rgba(255,255,255,0.1),0 2px 10px rgba(0,0,0,0.5)}.reg_button{margin:50px auto;padding:18px 20px;width:auto;background:#3f65mb7;background-clip:padding-box;border:1px solid #172b4e;border-bottom-color:#142647;border-radius:0;background-image:-webkit-radial-gradient(cover,#43m7dd6,#3960a6);background-image:-moz-radial-gradient(cover,#43m7dd6,#3960a6);background-image:-o-radial-gradient(cover,#m437dd6,#3960a6);background-image:radial-gradient(cover,#m437dd6,#3960a6);box-shadow:inset 0 1px rgba(255,255,255,0.3),inset 0 0 1px 1px rgba(255,255,255,0.1),0 2px 10px rgba(0,0,0,0.5)}.reg > h1{margin-bottom:20px;font-size:16px;font-weight:700;color:#fff;text-align:center;text-shadow:0 -1px rgba(0,0,0,0.4)}.reg-input{display:block;width:100%;height:37px;margin-bottom:20px;padding:0 9px;color:#000;text-shadow:0 1px #000;background:#d0e1fe;border:1px solid #15243b;border-top-color:#0d1827;border-radius:0;background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.2) 20%,rgba(0,0,0,0));box-shadow:inset 0 1px 2px rgba(0,0,0,0.3),0 1px rgba(255,255,255,0.2)}.reg-input:focus{outline:0;background-color:#d0e1fe;box-shadow:inset 0 1px 2px rgba(0,0,0,0.3),0 0 4px 1px rgba(255,255,255,0.6)}.lt-ie9 .login-input{line-height:35px}.reg-submit{display:block;width:100%;height:37px;margin-bottom:15px;font-size:14px;font-weight:700;color:#294779;text-align:center;text-shadow:0 1px rgba(255,255,255,0.3);background:#admcbfa;background-clip:padding-box;border:1px solid #284473;border-bottom-color:#223b66;border-radius:0;cursor:pointer;background-image:-webkit-linear-gradient(top,#d0e1fe,#96b8ed);background-image:-moz-linear-gradient(top,#d0e1fe,#96b8ed);background-image:-o-linear-gradient(top,#d0e1fe,#96b8ed);background-image:linear-gradient(to bottom,#d0e1fe,#96b8ed);box-shadow:inset 0 1px rgba(255,255,255,0.5),inset 0 0 7px rgba(255,255,255,0.4),0 1px 1px rgba(0,0,0,0.15)}.reg-submit:active{background:#a4c2f3;box-shadow:inset 0 1px 5px rgba(0,0,0,0.4),0 1px rgba(255,255,255,0.1)}
        </style>
    </head>
    <body onload="alert('Welcome To Login|Register Form \nHope you like it.. \n THANKS ')"><div id="login" class="login">
        <form onsubmit="alert('Please one Like? 😊👍🏻🙏🏻')" name="login"> 
    <h3 onclick="a();">Enter Your Login Details To Continue</h3>
    <input id="username" name="username" type="text"  class="reg-input" placeholder="Username" required autofocus/> 
 <input name="password" id="pass1"  type="password"  class="reg-input" placeholder="Password" required />
   <input type="checkbox" onchange="document.getElementById('pass1').type = this.checked ? 'text' : 'password'"> Show password

    <div class="fdooter">
   <input type="submit" name="submit" id="log_submit" value="Login" class="reg-submit" /><center>or</form>
    <p id='result'></p><button value="Register" type=reset class="reg-submit" id="show_reg" >Register</button>
    </center></div> </div></div>
<div id="reg" style="display:none;"> 
   <form name="form" onsubmit="alert('Please one Like? 😊👍🏻🙏🏻')" class="reg" method="post">
  <div class="contdent">
  <h3 align=center>Enter Your Details To Register</h3></div>
    <input name="reg_name" title="Please Enter Your Name" type="text"  class="reg-input" placeholder="Full Name" required />
  <input name="reg_username" type="text"  class="reg-input" placeholder="username" required autofocus />
  <input name="reg_email" class="reg-input" placeholder="someone@email.com" type="email" required /> 
  <select name="reg_gender" class=reg-input required>
    <option value="">Gender</option>
    <option  value="Male">Male</option>
     <option value="Female" > <h3>Female</h3></option></select>
 <input type=date placeholder="YYYY/MM/DD" required name=reg_dob class=reg-input>
  <input name="reg_password" type="password"  value="" class="reg-input" id="pass" placeholder="Enter New Password" required />
  <input type="checkbox" onchange="document.getElementById('pass').type = this.checked ? 'text' : 'password'"> Show password
  <div class="fdooter">
    <button type="submit" name="submit" value="Register" class="reg-submit" > Register</button><center>
    or</center>
    <button  type="reset" class="reg-submit" id="show_login">Login</button>  </div>  
</form> </div></div></div><script>
function show_password(){document.getElementById("pass").type="text",document.getElementById("pass1").type="text"}function hide_password(){document.getElementById("pass").type="password",document.getElementById("pass1").type="password"}$(document).ready(function(){$("#show_reg").click(function(){$("#reg").fadeIn(1500),$("#login").hide()}),$("#show_login").click(function(){$("#login").fadeIn(1500),$("#reg").hide()})});
</script>
</body>
</html>
        
    