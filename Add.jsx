import React, { useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';




const MyForm = () => {
  const [aktualisIdo] = useState(new Date());

  const [formData, setFormData] = useState({
    cim: '',
    megjelenes: '',
    mufaj: '',
    szereplok: '',
    leiras:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios segítségével küldjük el a form adatait a szervernek
      await axios.post('http://localhost:5001/sorozathozzaad', formData);
      console.log('Form data sent successfully');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
  
   
  
  

  return (
   
    
    <Container style={{maxWidth:'800px', backgroundColor:'red', borderRadius:'50px', marginTop:'20px', height:'700px',marginBottom:'20px'}}>
       
 <p style={{paddingTop:'20px',textAlign:'center'}}>{aktualisIdo.toLocaleString()}</p>

<h1 style={{textAlign:'center'}}>Sorozat hozzáadása az adatázishoz</h1>
    <Form onSubmit={handleSubmit} style={{paddingTop:'20px'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cim</Form.Label>
        <Form.Control type="text"
        name="cim"
        id="cim"
        placeholder="A sorozat címe"
        value={formData.cim}
        onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Megjelenés</Form.Label>
        <Form.Control type="date"
        name="megjelenes"
        id="megjelenes"
        placeholder="A sorozat megjelenésének a dátumát adja meg"
        value={formData.megjelenes}
        onChange={handleChange} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Műfaj</Form.Label>
        <Form.Control 
       type="text"
       name="mufaj"
       id="mufaj"
       value={formData.mufaj}
       onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Szereplők</Form.Label>
        <Form.Control 
       type="text"
       name="szereplok"
       id="szereplok"
       value={formData.szereplok}
       onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlArea1">
        <Form.Label>Leírás</Form.Label>
        <Form.Control 
      type="text"
      name="leiras"
      id="leiras"
      value={formData.leiras}
      onChange={handleChange} />
      </Form.Group>
      <button type="submit" value="Send" className="btn btn-primary mx-auto d-block" style={{width:"300px", backgroundColor:'#FF7074', border:'none', borderRadius:'10px'}}>Send</button>
    </Form>
    </Container>
  );
}

export default MyForm;