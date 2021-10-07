import React, {useState} from "react";
import {FormControl, InputGroup, DropdownButton, Dropdown} from 'react-bootstrap';

function PostMan(){

    const [dpName, getDpName] = useState("GET")

    return(
        <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title={dpName}
              id="input-group-dropdown-1"
              onSelect={e => getDpName(e)}>
              <Dropdown.Item eventKey="GET">GET</Dropdown.Item>
              <Dropdown.Item eventKey="POST">POST</Dropdown.Item>
              <Dropdown.Item eventKey="PUT">PUT</Dropdown.Item>
              <Dropdown.Item eventKey="DELETE">DELETE</Dropdown.Item>
            </DropdownButton>

            <FormControl aria-label="Text input with dropdown button" />
      </InputGroup>
    )
}

export default PostMan;