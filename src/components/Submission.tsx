import React, { useState, useRef, useEffect } from 'react';

export type SubmissionProps = {
    fName: string;
    lName: string;
    flownPrev: boolean;
    destinations: Set<String>;
}


export default function Submission({
    fName,
    lName,
    flownPrev,
    destinations   
}: SubmissionProps){

    let disabled = true;
    if (fName !== "" && lName !== "" && flownPrev !== null) disabled = false;

    const submissionInfo = {
        "First Name: ": fName,
        "Last Name: " : lName,
        "Flown Previously: ": flownPrev,
        "Destinations Visited: ": destinations
    }

    return(
        <>
            <auro-button disabled={disabled ? true : undefined} type="submit" onClick={console.log("!!!!!! fname: ", fName, " lName: ", lName, " flownPrev: ", flownPrev, " destinations: ", destinations)}>Submit</auro-button>
            <div className="formDataWrapper">
                Form Data: {JSON.stringify(submissionInfo)}
            </div>
        </>
    )
}