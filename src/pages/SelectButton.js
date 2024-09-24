import React, { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';

const SelectButtonEx = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Opción 1', value: '1' },
        { label: 'Opción 2', value: '2' },
        { label: 'Opción 3', value: '3' }
    ];

    const handleChange = (e) => {
        setSelectedOption(e.value);
    };

    return (
        <div className="card">
            <h5>Ejemplo de SelectButton</h5>
            <SelectButton 
                value={selectedOption} 
                options={options} 
                onChange={handleChange} 
                style={{ width: '100%' }} 
            />
            {selectedOption && (
                <div className="selected-option">
                    <p>Opción seleccionada: {selectedOption}</p>
                </div>
            )}
        </div>
    );
};

export default SelectButtonEx;
