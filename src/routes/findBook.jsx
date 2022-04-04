import {useState,useEffect, useRef} from "react";
import { getInvoices } from "../data";
import bookfacade from "../bookfacade";
import returnVal from "../bookfacade";

export default function FindBook() {

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState(bookfacade.getBooks);
    const [searchBooks, setSearchBooks] = useState([]);

    useEffect(() => {

        setSearchBooks(books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())))

    },[search])


    const inputHandler = (event) => {
        const value = event.target.value;
        setSearch(value)
    }


    return (
        <div>
            <h2>Find book</h2>

            <input type="text" id="bookid" placeholder="Book name" onChange={inputHandler} />

            <ul>
                {searchBooks.map((book) => {
                    return <li key={book.id}>
                        {book.title}
                    </li>
                })}
            </ul>

        </div>
    );
}