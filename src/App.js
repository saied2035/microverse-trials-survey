import './App.css';
import 'react-bootstrap';
import { Button, Form, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <h1 id="title">microverse trials survey</h1>
       <p id="description">this is a survey for microverse trials.</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id="name-label">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" id="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id="email-label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id='email'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id="number-label">Number</Form.Label>
          <Form.Control type="number" placeholder="Enter number" id='number'/>
        </Form.Group>
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu id="dropdown">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <InputGroup className="flex justify-center mb-3">

                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <FormControl className="ml1 mw5" value="Something" aria-label="Text input with checkbox" disabled/>

                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <FormControl className="ml1 mw5" value="Something" aria-label="Text input with checkbox" disabled/>

                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <FormControl className="ml1 mw5" value="Something" aria-label="Text input with checkbox" disabled/>                                
              </InputGroup>

              <InputGroup className="flex justify-center mb-3">

                <InputGroup.Radio aria-label="Radio button for following text input" />
                <FormControl className="ml1 mw5" value="Something else" 
                aria-label="Text input with radio button" disabled/>

                <InputGroup.Radio aria-label="Radio button for following text input" />
                <FormControl  className="ml1 mw5" value="Something else" 
                aria-label="Text input with radio button" disabled/>

                <InputGroup.Radio aria-label="Radio button for following text input" />
                <FormControl className="ml1 mw5" value="Something else" 
                aria-label="ml1 Text input with radio button" disabled/>     

          </InputGroup>
          <textarea className="" placeholder="your feedback"></textarea>
        <Button id="submit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
