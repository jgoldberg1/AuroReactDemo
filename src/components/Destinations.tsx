import { useState } from "react";

export type DestinationsProps = {
    setDestinations: Function;
    destinations: Set<String>;
    flownPrev?: boolean;
}

export default function Destinations({
  setDestinations,
  destinations,
  flownPrev
}: DestinationsProps) {


    const [destinationOptions] = useState([
        {
          id: 'cbx1',
          value: 'lower48',
          label: 'Lower 48',
          checked: false
        },
        {
          id: 'cbx2',
          value: 'Alaska',
          label: 'Alaksa',
          checked: false
        },
        {
          id: 'cbx3',
          value: 'Hawaii',
          label: 'Hawaii',
          checked: false
        },
        {
          id: 'cbx4',
          value: 'Canada',
          label: 'Canada',
          checked: false
        },
        {
          id: 'cbx5',
          value: 'Mexico',
          label: 'Mexico',
          checked: false
        }
      ]);

    const handleInput = (e: any) => {
      let updatedDestinations = new Set(JSON.parse(JSON.stringify(Array.from(destinations))));
      e.target.checked ? updatedDestinations.add(String(e.target.value)) : updatedDestinations.delete(String(e.target.value));
      setDestinations(updatedDestinations);
    }

    return(
        <>
            <auro-checkbox-group hidden={flownPrev === null ? true : undefined}>
            <span slot="legend">
                What destinations have you traveled to?
            </span>
            {destinationOptions.map((option: { id: any; value: any; checked: any; label: any; }) => (
                <auro-checkbox
                key={option.id}
                id={option.id}
                name="cbxDemo"
                value={option.value}
                checked={option.checked || undefined}
                onInput={(e: any) => handleInput(e)}>
                {option.label}
                </auro-checkbox>
            ))}
            </auro-checkbox-group>
            {console.log(destinations)}
        </>
    )
}