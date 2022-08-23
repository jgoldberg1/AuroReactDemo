import { useState } from "react";

export type FlightHistoryProps = {
  flownPrev: boolean;
  setFlownPrev: Function;
}

export default function FlightHistory({
  flownPrev,
  setFlownPrev
}: FlightHistoryProps){

    const [flownPrevOptions] = useState([
        {
          id: 'radio1',
          value: true,
          label: 'Yes',
        },
        {
          id: 'radio2',
          value: false,
          label: 'No'
        }
      ]);

    return(
        <>
        <auro-radio-group required>
          <span slot="legend">
            Have you ever flown with Alaska Air?
          </span>
          {flownPrevOptions.map((option: { id: string; label: any; value: any; checked: any; }) => (
            <auro-radio
              key={option.id}
              id={option.id}
              label={option.label}
              name={option.id}
              value={option.value}
              checked={option.checked || undefined}
              onClick={() => option.label==='Yes' ? setFlownPrev(true) : setFlownPrev(false)}>
            </auro-radio>
          ))}
        </auro-radio-group>
        </>
    )
}