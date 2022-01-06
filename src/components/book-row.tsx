import { Book } from "../dtos/dtos";

export default function BookRow(props:Book){
    const {title,author,isCheckedout} = props

    return(<tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{isCheckedout? "Not Available": "In Library"}</td>
        <td><button>Details</button></td>

    </tr>)
}