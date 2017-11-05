const initialState = {
  messages: [],
  members: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'MESSAGES_LOADING_FULFILLED':
      return {
        ...state,
        messages: action.payload,
      };
    case 'MEMBERS_LOADING_FULFILLED':
      return {
        ...state,
        members: action.payload,
      };
    default:
      return state;
  }
};
