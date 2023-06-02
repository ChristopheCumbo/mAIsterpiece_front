// ACTION TYPES

export const CLEAR_ONE_MESSAGE = 'CLEAR_ONE_MESSAGE';
export const ADD_ONE_MESSAGE = 'ADD_ONE_MESSAGE';

// ACTION CREATORS

/**
 * Clear one message
*/
export const actionClearOneMessage = (messageId) => ({
  type: CLEAR_ONE_MESSAGE,
  payload: messageId,
});

/**
 * Add a new message
*/
export const actionAddOneMessage = (messageType, messageContent) => ({
  type: ADD_ONE_MESSAGE,
  payload: { messageType, messageContent },
});
