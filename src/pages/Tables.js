import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Tables = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí puedes cargar datos de una API o de cualquier otra fuente
    const productData = [
      { id: 1, name: 'Manzana', price: 100, category: 'Fruta' },
      { id: 2, name: 'Pera', price: 150, category: 'Fruta' },
      { id: 3, name: 'Palta', price: 200, category: 'Verdura' }
    ];
    setProducts(productData);
  }, []);

  return (
    <div className="datatable-demo">
      <h3>Lista de Productos</h3>
      <DataTable value={products} paginator rows={10} >
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Nombre" sortable />
        <Column field="price" header="Precio" sortable />
        <Column field="category" header="Categoría" sortable />
      </DataTable>
    </div>
  );
};

export default Tables;
