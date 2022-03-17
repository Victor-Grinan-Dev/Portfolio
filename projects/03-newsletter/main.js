class User {
    constructor(firstName, lastName, email, password){
        this.name = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

const name = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const response = document.querySelector("#response");
const submitBtn = document.querySelector("#submit")



const createUser = (e) => {
    e.preventDefault();
    console.log(password.value === passwordConfirm.value);

    /** 
        if (password === passwordConfirm){

    }else{
        response.textContent = "Password doesn't match"
    }
    */

}

submitBtn.addEventListener("click", createUser)