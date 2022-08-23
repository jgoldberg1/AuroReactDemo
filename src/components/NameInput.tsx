export type NameInputProps = {
    setfName: Function;
    setlName: Function;
    fName: string;
    lName: string;
}

export default function NameInput({
    setfName,
    setlName,
    fName,
    lName   
}: NameInputProps){


    return(
        <>
            <auro-input bordered required value={fName} onInput={(e: { target: { value: any; }; }) => setfName(e.target.value) }>
            <span slot="label">First Name</span>
            </auro-input>
            <auro-input bordered required value={lName} onInput={(e: { target: { value: any; }; }) => setlName(e.target.value) }>
            <span slot="label">Last Name</span>
            </auro-input>
        </>
    )
}