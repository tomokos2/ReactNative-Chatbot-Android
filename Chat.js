// // import { ApiAiClient } from 'api-ai-javascript';
// // import { applyMiddleWare, createStore } from 'redux';

// // const clientAccessToken = '831adfbb76734799a0df4d16d3d89efe';
// // const client = new ApiAiClient({ clientAccessToken });

// const ON_MESSAGE = 'ON_MESSAGE';

// // Action
// export const sendMessage = (text, sender = 'user') => ({
//   // Name for the action
//   type: ON_MESSAGE,
//   // Payload == contents of the package (transmitted data apart of the intended message)
//   payload: { text, sender },
// });

// // A redux pattern for making middleware
// const messageMiddleware = () => next => action => {
//   next(action);
//   if (action.type === ON_MESSAGE) {
//     const { text } = action.payload;
//     client.textRequest(text).then(onSuccess);
//     function onSuccess(response) {
//       const {
//         result: { fulfillment },
//       } = response;
//       next(sendMessage(fulfillment.speech, 'bot'));
//     }
//   }
// };

// // Takes care of all actions related to message
// // Empty state is intial state of the message
// const messageReducer = (state = [], action) => {
//   // Based on the action, change the state
//   switch (action.type) {
//     case ON_MESSAGE:
//       // Spread state first, because state may already have a text and sender
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export const store = createStore(
//   messageReducer,
//   applyMiddleWare(messageMiddleware),
// );
