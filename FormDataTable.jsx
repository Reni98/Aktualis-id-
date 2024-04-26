// React oldal
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';

const FormDataTable = () => {
    const [formData, setFormData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Axios segítségével lekérjük az adatokat a szerverről
        axios.get('http://localhost:5001/getFormData')
        .then(response => {
            const filteredData = response.data.filter(data =>
                data.cim.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFormData(filteredData);
        })
        .catch(error => {
            console.error('Error fetching form data:', error);
        });
}, [searchTerm]);

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Adatbázis tartalom</h1>
            <input
                type="text"
                placeholder="Keresés név alapján"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mx-auto" // mx-auto a Bootstrap osztály a középre igazításhoz
  style={{ maxWidth: '300px', margin:'20px 0 20px 0' }} // Példa: a maximális szélességet állítsd be az igényeid szerint
                
                
            />
            <Container fluid>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr className='bg-danger text-white'>
                        <th>Cím</th>
                        <th>Megjelenés</th>
                        <th>Műfaj</th>
                        <th>Szereplől</th>
                        <th>Leírás</th>
                        <th>Kép</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map(data => (
                        <tr key={data.id}>
                            <td>{data.cim}</td>
                            <td>{data.megjelenes}</td>
                            <td>{data.mufaj}</td>
                            <td>{data.szereplok}</td>
                            <td>{data.leiras}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
        </div>
    );
};

export default FormDataTable;