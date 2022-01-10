import { useRef } from "react"


export default function CheckoutForm(){

    const memberUsernameInput = useRef(null)
    const bookIdInput = useRef(null)

    async function checkout(){
        const username = memberUsernameInput.current.value;
        const bookId = bookIdInput.current.value;
        
        const response = await fetch(`http://localhost:5000/books/${bookId}/checkout`, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username})
        });

        if(response.status === 200){
            alert("Book was checked out")
        }else{
            alert("Something went wrong!")
        }

    }


    return(<>
    <h3>Checkout Form</h3>
    
    <label  htmlFor="memberUsernameInput">Member Username</label>
    <input ref={memberUsernameInput} id="memberUsernameInput" type="text" placeholder="bobbyhill"/>

    <br />
    
    <label htmlFor="bookIdInput">Book ID</label>
    <input ref={bookIdInput} type="text" id="bookIdInput" />

    <br />

    <button onClick={checkout} >Checkout</button>
        
    </>)
}