import React, { useState, useRef, useEffect } from 'react';
import './App.scss';

function App() {
  const [flierOptions] = useState([
    {
      id: 'radio1',
      value: true,
      label: 'Yes'
    },
    {
      id: 'radio2',
      value: false,
      label: 'No'
    }
  ]);

  const [destinationOptions, setDestinationOptions] = useState([
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

  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [flier, setFlier] = useState(null);
  const [destinations, setDestinations] = useState([]);

  let {...destinatationElAttrs} = {}

  if (!flier) {
    destinatationElAttrs = {
      ...destinatationElAttrs,
      hidden: true
    }
  }

  let {...submitElAttrs} = {}

  if (!fName || !lName || flier === null) {
    submitElAttrs = {
      ...submitElAttrs,
      disabled: true
    }
  }

  // Because the change event from auro-checkbox and auro-radio is a custom event, onChange does not pick it up
  // due to React's synthetic event system
  // We need to add the event listener using a ref instead
  // If you do not need to support IE, you can listen to the input event inline instead of using a ref.

  const flierGroupEl = useRef(null);
  useEffect(() => {
    const flierGroup = flierGroupEl.current;
    flierGroup.addEventListener('change', handleFlierChange);
    return function cleanup() {
      flierGroup.removeEventListener('change', handleFlierChange);
    };
  });

  const destinationsGroupEl = useRef(null);
  useEffect(() => {
    const destinationGroup = destinationsGroupEl.current;
    destinationGroup.addEventListener('change', handleDestinationChange);
    return function cleanup() {
      destinationGroup.removeEventListener('change', handleDestinationChange);
    };
  });

  const handleFlierChange = (e) => {
    const { target } = e;
    const value = (target.value === 'true')

    setFlier(value);
  }

  const handleDestinationChange = (e) => {
    const { target } = e;

    let updatedDestinationOptions = destinationOptions.map(
      option => option.value === target.value  ?
        { ...option, checked: target.checked } : option);
    setDestinationOptions(updatedDestinationOptions);

    let visitedDestinations = updatedDestinationOptions
      .filter((option) => option.checked)
      .map((option) => option.value)

    setDestinations(visitedDestinations);
  }

  const getFormData = () => {
    const formData = {
      fName,
      lName
    }

    if (flier !== null) {
      formData.flier = flier;
    }

    if (flier && destinations.length > 0) {
      formData.destinations = destinations
    }

    return formData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData();

    console.warn('Form JSON Data:', formData);
    alert(`Form JSON Data: ` + JSON.stringify(formData));
  }

  return (
    <main>
      <auro-header>React Web Component Demo</auro-header>

      <form>
        {/* Required inputs */}
        <auro-input bordered required value={fName} onInput={(e) => setfName(e.target.value) }>
          <span slot="label">First Name</span>
        </auro-input>
        <auro-input bordered required value={lName} onInput={(e) => setlName(e.target.value) }>
          <span slot="label">Last Name</span>
        </auro-input>

        <br />

        {/* Required radio button options */}


        {/* Required checkbox options */}
        <auro-checkbox-group ref={destinationsGroupEl} {...destinatationElAttrs}>
          <span slot="legend">
            What destinations have you traveled to?
          </span>
          {destinationOptions.map((option) => (
            <auro-checkbox
              key={option.id}
              id={option.id}
              name="cbxDemo"
              value={option.value}
              checked={option.checked || undefined}>
              {option.label}
            </auro-checkbox>
          ))}
        </auro-checkbox-group>

        {/* Submit button is not active until all requirements are meet */}
        <auro-button type="submit" onClick={handleSubmit} {...submitElAttrs}>Submit</auro-button>
      </form>

      <br />

      {/* Visual of data entered */}
      <div className="formDataWrapper">
        Form Data: {JSON.stringify(getFormData())}
      </div>
    </main>
  );
}

export default App;
