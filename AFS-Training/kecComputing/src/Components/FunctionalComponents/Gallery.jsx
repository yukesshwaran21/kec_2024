import { useState } from "react";

const Gallery = () => {
    const [counter, setCount] = useState(0); 

    return (
        <section>
            <h1>This is the Gallery Page</h1>
            <h2 style={{ textAlign: "center", color: "red" }}>Learning State Concept</h2>
            <h3>The state of my variable count is {counter}</h3>
            <button onMouseOver={() => setCount(counter + 1)}>Increment</button>
            <button onDoubleClick={() => setCount(counter - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </section>
    );
};

export default Gallery;
