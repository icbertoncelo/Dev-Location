import React from 'react';

import { Container, Developer } from './styles';

const DevList = () => (
  <Container>
    <Developer>
      <img
        src="https://avatars1.githubusercontent.com/u/15328398?v=4"
        alt=""
      />
      <div>
        <strong>Ian Carlos</strong>
        <span>icbertoncelo</span>
      </div>
      <button type="submit">
        <i className="fa fa-trash" />
      </button>
    </Developer>
  </Container>
);

export default DevList;
