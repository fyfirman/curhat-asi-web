interface UserListAction implements IStandardAction {
  type: string;
  payload: IPagination<IUser>;
  error?: {}
}

interface UserListState<U = IUser> {
  payload: IPagination<U>;
  isLoading: boolean;
  error: Record;
}
