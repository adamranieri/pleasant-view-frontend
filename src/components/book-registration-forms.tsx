import { useRef } from "react"
import { Book } from "../dtos/dtos";
import BookTable from "./book-table";


export default function BookRegistrationForm(){

    const titleInput = useRef(null);
    const authorInput = useRef(null);

    async function registerBook(){

        const book: Book = {
            id:'',
            title: titleInput.current.value,
            author: authorInput.current.value,
            returnDate:0,
            isCheckedout: false
        }

        const response = await fetch('http://0722-50-110-89-213.ngrok.io/books', {
            method:'POST',
            body:JSON.stringify(book), 
            headers:{
                'Content-Type':"application/json"
            }
        })

        if(response.status === 201){
            alert("Successfully added")
        }else{
            alert("THERE WAS AN ERROR CREATING THE BOOK")
        }
    }



    return(<>
        <h3>Register a new Book</h3>

        
        <label htmlFor="titleInput">Title</label>
        <input ref={titleInput} type="text" id="titleInput" placeholder="To Kill A Mockingbird" />

        <label htmlFor="authorInput">Author</label>
        <input ref={authorInput} type="text" id="authorInput" placeholder="Harper Lee" />

        <button onClick={registerBook}>Add Book</button>
    </>)
}