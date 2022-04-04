import { useParams } from "react-router-dom";
import bookfacade from "../bookfacade";
import {useState,useEffect, useRef} from "react";

export default function AddBook() {

    const inputRef = useRef(null);
    const [name,setName] = useState("");
    const [info,setInfo] = useState("");


    function change () {
        let book = {
            id: 0,title: name, info: info
        }

        bookfacade.addBook(book);
    }




    return (
        <div>
            <h2>Add book</h2>

            <input type="text" id="name" onChange={event => setName(event.target.value)} placeholder="Book name" />
            <input type="text" id="info" onChange={event => setInfo(event.target.value)} placeholder="Book info"/>

            <button onClick={change}>Add</button>

        </div>
    );
}