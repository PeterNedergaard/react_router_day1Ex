import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Books from "./routes/books";
import AddBook from "./routes/addBook";
import FindBook from "./routes/findBook";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/books" element={<Books/>}/>
                <Route path="/add_book" element={<AddBook/>}/>
                <Route path="/find_book" element={<FindBook/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);