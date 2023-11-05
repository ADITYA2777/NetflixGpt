
export const emailCheckerHandler = (email,password,fullName) => {
    const isFullNamevaldate = /^[A-Za-z]+$/.test(fullName);
    const isEmailValdate =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
    const isPasswordValdate = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);  
 
    if(!isFullNamevaldate)return "fullName is not valid"
    if(!isEmailValdate)return "Email is not valid"
    if (!isPasswordValdate) return "Password is not valid"
    
    return null;
}