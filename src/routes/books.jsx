import bookfacade from "../bookfacade";

export default function Books() {
    return (
        <div style={{padding: "1rem 0"}}>
            <h2>Books</h2>

            <ul>
                {bookfacade.getBooks().map((book) => {

                    return <li key={book.id}>
                        {book.title}
                    </li>
                })}
            </ul>

        </div>
    );
}