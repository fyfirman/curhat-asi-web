interface UserListAction implements Action {
  type: string;
  payload: IUser[];
  error?: {}
}

interface UserListState {
  payload: IUser[];
  isLoading: boolean;
  error: Record;
}
