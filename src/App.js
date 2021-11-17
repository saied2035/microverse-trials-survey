import './App.css';
import 'react-bootstrap';
import { Button, Form, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <h1 id="title">microverse trials survey</h1>
       <p id="description">this is a survey fpr microverse trials.</p>
       {/* <form id="survey-form">
         
         <input type="email" id="email"/>
       </form> */}

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" id="name" />
        
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id='email'/>
        
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Enter number" id='number'/>
        </Form.Group>
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
