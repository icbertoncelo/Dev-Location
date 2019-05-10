import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developers';

import { Container } from './styles';

class Modal extends Component {
  state = {
    userInput: '',
  };

  handleSaveUser = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    const { addDeveloperRequest } = this.props;

    addDeveloperRequest(userInput);
    this.setState({ userInput: '' });
  };

  render() {
    const { userInput } = this.state;
    return (
      <Container>
        <strong>Add a new user</strong>
        <input
          type="text"
          placeholder="user"
          value={userInput}
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <div className="add-user-actions">
          <button
            type="button"
            onClick={() => {}}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={this.handleSaveUser}
          >
            Save
          </button>
        </div>
      </Container>
    );
  }
}

Modal.propTypes = {
  addDeveloperRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
