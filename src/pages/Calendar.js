import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

const CalendarExample = () => {
    const [date, setDate] = useState(null); // Para una sola fecha
    const [rangeDates, setRangeDates] = useState(null); // Para un rango de fechas
    const [multipleDates, setMultipleDates] = useState(null); // Para múltiples fechas

    return (
        <div className="card">
            <h5>Calendario - Selecciona una fecha</h5>
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
            <p>Fecha seleccionada: {date ? date.toLocaleDateString() : 'No seleccionada'}</p>


            <h5>Calendario - Selecciona múltiples fechas</h5>
            <Calendar value={multipleDates} onChange={(e) => setMultipleDates(e.value)} selectionMode="multiple" />
            <p>Fechas seleccionadas: {multipleDates ? multipleDates.map(date => date.toLocaleDateString()).join(', ') : 'No seleccionadas'}</p>
        </div>
    );
};

export default CalendarExample;
