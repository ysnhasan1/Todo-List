import React, { useState } from "react";
import Header from "../components/Header.jsx";
import InputArea from "../components/InputArea.jsx";
import Footer from "../components/Footer.jsx";

function App() {

    const [userInput, setUserInput] = useState("");
    const [array, setArray] = useState([]);

    function inputChangeFunc(e) {
        setUserInput(e.target.value);
    }

    function addItem() {
        if (userInput !== "") {
            setArray((prevValues) => {
                return [...prevValues, userInput]
            })

            setUserInput("");
        }
    }

    function deleteItem(itemID) {
        setArray((prevValues) => {
            return prevValues.filter((eachArrayElement, index) => {
                return index !== itemID
            })
        })
    }

    return (
        <div id="app-container">
            <Header />

            <InputArea
                inputFunc={inputChangeFunc}
                userInp={userInput}
                clickFunc={addItem}
            />

            {/* ToDo Items */}
            <ul className="flex-container">
                {array.map((eachArrayElement, index) => {
                    return (
                        // Each child in a list should have a unique "key" prop. 
                        <li className="flex-items" key={index} onClick={() => deleteItem(index)} >
                            {eachArrayElement}
                        </li>
                    )
                })}
            </ul>

            <Footer />
        </div>
    )
};

export default App;