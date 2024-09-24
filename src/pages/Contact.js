import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const Contact = () => {
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
};

  return (
    <div>
      <h2>Página de Contacto</h2>
      <p>
      <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
      </p>
    </div>
  );
};

export default Contact;
