export default function (state = {}, action) {
  switch (action.type) {
    case 'USER_STATUS':
      return { ...state, user: action.payload };
    case 'USER_DB_STATUS':
      return { ...state, dbUsers: action.payload };
    case 'ALLOWED_STATUS':
      return { ...state, dbAllowedUsers: action.payload };
    default:
      return state;
  }
}