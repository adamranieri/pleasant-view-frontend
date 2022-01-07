import { useNavigate } from "react-router-dom";
import { Book } from "../dtos/dtos";

export default function BookRow(props:Book){
    const {title,author,isCheckedout, id} = props
    const navigate = useNavigate()

    function goToDetails(){
        navigate(`${id}`)

    }

    return(<tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{isCheckedout? "Not Available": "In Library"}</td>
        <td><button onClick={goToDetails}>Details</button></td>

    </tr>)
}