import { useRef } from "react"

export default function LoginPage(props:{updateUser:Function}){

    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    async function login(){

        const loginPayload = {
            username: usernameInput.current.value,
            password: passwordInput.current.value
        }

        const response = await fetch('http://localhost:5000/login', {method:'PATCH', body:JSON.stringify(loginPayload), headers:{
            'Content-Type':'application/json'
        }})

        const member = await response.json();
        props.updateUser({username:member.username, isEmployee:member.isEmployee})

        sessionStorage.setItem("username", member.username);
        sessionStorage.setItem("id", member.id)
        sessionStorage.setItem("isEmployee",`${member.isEmployee}` )

    }

    return(<>

        <h1>Login page</h1>

        <h3>Login form</h3>

        <label htmlFor="usernameInput">Username</label>
        <input ref={usernameInput} type="text" id="usernameInput" />

        <label htmlFor="passwordInput">Password</label>
        <input ref={passwordInput} type="password" id="passwordInput" />

        <button onClick={login}>login</button>
    </>)
}