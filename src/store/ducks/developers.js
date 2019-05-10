/*
Types
*/
export const Types = {
  ADD_REQUEST: 'developers/ADD_REQUEST',
  ADD_SUCCESS: 'developers/ADD_SUCCESS',
  ADD_FAILURE: 'developers/ADD_FAILURE',
  REMOVE: 'developers/REMOVE',
};

/*
Reducers
*/
const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function developers(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(dev => dev.id !== action.payload.developer.id),
      };
    default:
      return state;
  }
}

/*
Actions
*/
export const Creators = {
  addDeveloperRequest: (developer, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { developer, cordinates },
  }),

  addDeveloperSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDeveloperFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeDeveloper: developer => ({
    type: Types.REMOVE,
    payload: { developer },
  }),
};
