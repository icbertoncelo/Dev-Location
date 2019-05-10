import React from "react";

import { Container } from "./styles";

const Modal = () => (
  <Container>
    <strong>Add a new user</strong>
    <input type="text" placeholder="usuário" />
    <div className="add-user-actions">
      <button type="button" onClick={() => {}}>
        Cancel
      </button>
      <button type="button" onClick={() => {}}>
        Save
      </button>
    </div>
  </Container>
);

export default Modal;
