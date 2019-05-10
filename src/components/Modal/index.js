import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import { Creators as DeveloperActions } from '../../store/ducks/developers';
import { Creators as ModalActions } from '../../store/ducks/modal';

import { Container } from './styles';

class DevModal extends Component {
  state = {
    userInput: '',
  };

  handleSaveUser = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    const {
      addDeveloperRequest,
      modal: { cordinates },
    } = this.props;

    addDeveloperRequest(userInput, cordinates);
    this.setState({ userInput: '' });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ userInput: '' });
  };

  render() {
    const { userInput } = this.state;
    const { modal } = this.props;
    return (
      <>
        <Modal
          isOpen={modal.visible}
          ariaHideApp={false}
          className="modal-container"
        >
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
                onClick={this.handleHideModal}
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
        </Modal>
      </>
    );
  }
}

Modal.propTypes = {
  addDeveloperRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  developers: state.developers,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...DeveloperActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevModal);
