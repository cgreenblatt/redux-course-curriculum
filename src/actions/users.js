import { RECEIVE_USERS } from '../reducers/users';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
