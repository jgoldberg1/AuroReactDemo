import React, { useState, useRef, useEffect } from 'react';
import './App.scss';
import NameInput from "./components/NameInput";
import FlightHistory from "./components/FlightHistory";
import Destinations from "./components/Destinations";
import Submission from "./components/Submission";



export default function AppRewrite() {

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [flownPrev, setFlownPrev] = useState(null);
    const [destinations, setDestinations] = useState(new Set<String>(""));


    return (
        <main>
            <form>
                <auro-header>React Web Component Demo</auro-header>
                <NameInput 
                    setfName={setfName}
                    setlName={setlName}
                    fName={fName}
                    lName={lName}
                />
                <FlightHistory 
                    flownPrev={flownPrev}
                    setFlownPrev={setFlownPrev}
                />
                <Destinations
                    setDestinations={setDestinations} 
                    destinations={destinations}
                    flownPrev={flownPrev}
                />
                <Submission 
                    fName={fName}
                    lName={lName}
                    flownPrev={flownPrev}
                    destinations={destinations}
                />
            </form>
        </main>
    );
}

//auro-inputs for fname and lname
//auro radio buttons for if user has flown before
//checkboxes for previous flight options
//submit button
//display jsonified form data