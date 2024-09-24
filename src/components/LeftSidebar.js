import React, { useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null); // Estado para manejar el índice activo

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
      command: () => { navigate('/'); }
    },
    {
      label: 'Componentes',
      icon: 'pi pi-fw pi-box',
      items: [
        {
          label: 'Calendario',
          icon: 'pi pi-fw pi-calendar',
          command: () => { navigate('/components/calendar'); }
        },
        {
          label: 'SelectButton',
          icon: 'pi pi-fw pi-file',
          command: () => { navigate('/components/selectButton'); }
        },
        {
          label: 'Tablas',
          icon: 'pi pi-fw pi-table',
          command: () => { navigate('/components/tables'); }
        }
      ]
    },
    {
      label: 'Contacto',
      icon: 'pi pi-fw pi-envelope',
      command: () => { navigate('/contact'); }
    }
  ];
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar-content">
      <PanelMenu model={items} style={{ width: '100%' }}    
        onToggle={(event) => handleToggle(event.index)}
        activeIndex={activeIndex}/>
    </div>
  );
};

export default LeftSidebar;
