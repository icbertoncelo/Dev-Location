/*
Types
*/
export const Types = {
  SHOW_MODAL: 'modal/SHOW_MODAL',
  HIDE_MODAL: 'modal/HIDE_MODAL',
};

/*
Reducer
*/
const initialState = {
  visible: false,
  cordinates: null,
};

export default function toggleModal(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { visible: true, cordinates: action.payload.cordinates };
    case Types.HIDE_MODAL:
      return { visible: false, cordinates: null };
    default:
      return state;
  }
}

/*
Actions
*/
export const Creators = {
  showModal: cordinates => ({
    type: Types.SHOW_MODAL,
    payload: { cordinates },
  }),
  hideModal: () => ({
    type: Types.HIDE_MODAL,
  }),
};
