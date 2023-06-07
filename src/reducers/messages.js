import { ADD_ONE_MESSAGE, CLEAR_ONE_MESSAGE } from "../actions/messages";

const initialState = {
  listMessages: [],
  nextMessageId: 1,
  // listMessages: [
  //   {
  //     id: 1,
  //     type: 'success',
  //     content: 'Chargement réussi',
  //   },
  //   {
  //     id: 2,
  //     type: 'error',
  //     content: 'Chargement en échec, veuillez réessayer',
  //   },
  // ],
  // nextMessageId: 3,

};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CLEAR_ONE_MESSAGE:
      console.log('action.payload : ', typeof action.payload);
      return {
        ...state,
        listMessages: state.listMessages.filter((message) => (message.id !== action.payload)),
      };

    case ADD_ONE_MESSAGE: {
      const newMessage = {
        id: state.nextMessageId,
        type: action.payload.messageType,
        content: action.payload.messageContent,
      };
      return {
        ...state,
        listMessages: [
          ...state.listMessages,
          newMessage,
        ],
        nextMessageId: state.nextMessageId + 1,
      };
    }

    default:
      return state;
  }
}

export default reducer;
