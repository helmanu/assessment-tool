export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_LOCATION':
      return action.payload;
    default:
      return state;
  }
}