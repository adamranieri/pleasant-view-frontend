import { useEffect, useState } from "react"
import { Book } from "../dtos/dtos"
import BookRow from "./book-row"


export default function BookTable(){

    // const books:Book[] =[
    //     {id:"101", title:"Frankenstien", author:"Mary Shelley", isCheckedout:true, returnDate:0},
    //     {id:"202", title:"Frankenstien 2: Electric Boogaloo", author:"Mary Shelley", isCheckedout:true, returnDate:0},
    //     {id:"303", title:"Catcher in the Rye", author:"JD Salinger", isCheckedout:false, returnDate:0},
    // ]
    const [books,setBooks] = useState([])

    const tableRows = books.map(b =><BookRow key={b.id} {...b}/>)

    async function getBooks(){
        const response = await fetch("http://localhost:5000/books");
        const books: Book[] = await response.json()
        setBooks(books)
    }

    // useEffect is a hook that will execute a callback function during the lifeycle of the component

    useEffect(()=>{
        getBooks();
    },[])// any stateful dependencies you that will retrigger the useEffect Callback function
    // [] the callback runs once at the when the component is rendered the first time

    // const [x, setX] = useState(0)

    // useEffect(()=>{
    //     console.log('I Run everytime x change in value')
    // },[x])


    return(<>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>More Info</th>
            </tr>  
        </thead>
        <tbody>
            {tableRows}
        </tbody>
    </table>

    {/* <button onClick={()=>setX(Math.random())}>Random value {x}</button> */}
    </>)
}