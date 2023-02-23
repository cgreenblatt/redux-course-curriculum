export const RECEIVE_USERS = 'RECEIVE_USERS';

export function usersReducer(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return action.users;
    default:
      return state;
  }
}
