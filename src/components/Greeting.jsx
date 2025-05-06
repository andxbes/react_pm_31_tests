import { useState } from "react";
import Output from "./Output";

export default function Greeting(params) {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <Output>It`s good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changedTextHandler}>Change Text!</button>
        </div>
    );
};
