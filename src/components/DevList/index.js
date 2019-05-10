import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperAction } from '../../store/ducks/developers';

import { Container, Developer } from './styles';

const DevList = ({ developers, removeDeveloper }) => (
  <Container>
    {!developers.data.length && <p>Nenhum usuário adicionado</p>}
    <ul>
      {developers.data.map(developer => (
        <li key={developer.id}>
          <Developer>
            <img
              src={developer.avatar_url}
              alt={developer.name}
            />
            <div>
              <strong>{developer.name}</strong>
              <span>{developer.login}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                removeDeveloper(developer);
              }}
            >
              <i className="fa fa-trash" />
            </button>
          </Developer>
        </li>
      ))}
    </ul>
  </Container>
);

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevList);
