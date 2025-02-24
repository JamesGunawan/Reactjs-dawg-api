import { useState } from "react";
import LikedPictures from "./DawgLikedPics";

function DisplayDawg() {
    
    // Set the states
    const [dawg, setDawg] = useState();
    const [dawgMessage, setDawgMessage] = useState("");
    const [dawgCounter, setDawgCounter] = useState(0);
    const [idCounter, setIdCounter] = useState(() => {
        // Get the last counter from localStorage or start from 0
        return Number(localStorage.getItem("idCounter")) || 0;
    });
    
    // Function to save liked pictures to local storage
    const saveLikedPictures = () => {
        // Retrieve existing liked pictures
        const existingPictures = JSON.parse(localStorage.getItem("likedDawg") || "[]");
    
        // Check if the picture is already in localStorage
        if (existingPictures.some((pic) => pic.id === dawg.id)) {
            setDawgMessage("Already Liked!");
            return;
        }
    
        // Update counter and save new picture
        const newCounter = idCounter + 1;
        localStorage.setItem("likedDawg" + newCounter, JSON.stringify(dawg));
        localStorage.setItem("idCounter", newCounter.toString()); // Store counter persistently
    
        setIdCounter(newCounter);
        setDawgMessage("Dawg Liked!");
    };
    

    // overall function that handles the dawg
    async function getDawg() {
        // Fetches the random dawg from the API
        const dawgAPI = await fetch("https://dog.ceo/api/breeds/image/random");

        // Set default dawg counter
        let dawgTracker = dawgCounter;

        // Waits for the response from the API
        const response = await dawgAPI.json();
        // if the response is successful, display dawg pics and update the dawg counter
        if (response.status === "success" ) {
            setDawg(response.message);
            setDawgMessage("Dawg Recieved!");
            dawgTracker++
            setDawgCounter(dawgTracker);
        // if the response is not successful == big sad no dawg
        } else {
            setDawgMessage("Failed to get Dawg :(");
        }
        
        // I Wonder what will happen? hmm
        if (dawgTracker === 10) {
            setDawg("https://i.redd.it/t7riiq77aat51.jpg")
            setDawgMessage("This ain't no dawg!")
        }
    }


    return(
    <>
    <div className="dawg-container">
        <h1>Display Dawg</h1>
        <div className="dawg-message">
            <h3>{dawgMessage}</h3>
        </div>
        <div>
            <h3> Dawg click counter : {dawgCounter}</h3>
        </div>
        <div className="main-container">
            <div className="buttons">
                <button onClick={getDawg}>Click me to get a random dawg</button>
                <button onClick={saveLikedPictures} className="save-pics">Click me to like dawg</button>
            </div>
            <img src={dawg} className="dawg-pics"></img>
        </div>
        <div className="liked-pics-container">
            <LikedPictures/>
        </div>
    </div>
    </>
    )
}

export default DisplayDawg; 