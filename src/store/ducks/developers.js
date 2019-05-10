/*
Types
*/
const Types = {
  ADD_REQUEST: 'developers/ADD_REQUEST',
  ADD_SUCCESS: 'developers/ADD_SUCCESS',
  ADD_FAILURE: 'developers/ADD_FAILURE',
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
        ...state,
        loading: false,
        error: null,
        data: [
          ...state.data,
          {
            id: Math.random(),
            login: 'icbertoncelo',
            avatar_url: 'https://avatars1.githubusercontent.com/u/15328398?v=4',
            url: 'https://api.github.com/users/icbertoncelo',
          },
        ],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/*
Actions
*/
export const Creators = {
  addDeveloperRequest: developer => ({
    type: Types.ADD_REQUEST,
    payload: { developer },
  }),

  addDeveloperSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDeveloperFailure: error => ({
    Types: Types.ADD_FAILURE,
    payload: { error },
  }),
};
