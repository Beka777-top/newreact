import React, { useState } from "react";
import useForm from "./useFrom";

export default function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const { values, handleChange, resetForm } = useForm({
        num1: 0,
        num2: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setNum1(Number(values.num1)); 
        setNum2(Number(values.num2));
        setResult(Number(values.num1) + Number(values.num2));
        resetForm();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="num1"
                    value={values.num1}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="num2"
                    value={values.num2}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
            <p>Result: {result}</p>
        </div>
    );
}