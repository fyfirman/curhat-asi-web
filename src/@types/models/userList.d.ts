interface UserListAction implements Action {
  type: string;
  payload: IUser[];
  error?: {}
}

interface UserListState<U = IUser> {
  payload: U[];
  isLoading: boolean;
  error: Record;
}
