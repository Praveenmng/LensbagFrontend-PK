import { useState } from "react";
import React from "react";
import {  Form,  InputGroup,  Button} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
  

function EditForm(props) {
 
    const [isEditable, SetIsEditable] = useState(false)

    function handleEditClick() {
        SetIsEditable(true)
    }

    return (
      <Form.Group controlId={"form-" + props.label.replace(/\s+/g, "").toLowerCase()} className="mb-3">
        <Form.Label>{props.label}</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            value={props.value}
            disabled={!isEditable}
            onChange={(e) => props.setValue(e.target.value)}
            
          />
          <Button variant="outline-secondary" onClick={handleEditClick}>
          <i className="bi bi-pencil"></i>
          </Button>
        </InputGroup>
      </Form.Group>
    );
  }
    



export default EditForm;