import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Book } from "../dtos/dtos"

export default function BookDetailsPage(){

    const {bookId} = useParams()
    const [book,setBook] = useState<Book>()

    useEffect(()=>{
        // IIFE Immediately Invoked Function Expression
        (async ()=>{
            const response = await fetch(`http://localhost:5000/books/${bookId}`)
            const book = await response.json();
            setBook(book)
        })()


    },[bookId])

    return(<>
        {book ? <> <h1>Detail View for book {bookId}</h1>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <p> The book is currently {book.isCheckedout? <em>UNAVAILABLE</em> :<em>AVAILABLE</em>}</p>
                </>: <h4>Loading</h4>} 
        
        
    </>)
}