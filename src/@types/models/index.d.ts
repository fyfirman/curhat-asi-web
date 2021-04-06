interface TimeStamp{
  createdAt: string;
  updatedAt: string;
}

interface Action {
  type: string;
  payload?: any;
}

interface IStandardState {
  isLoading: boolean;
  error: Record;
}

interface IStandardAction {
  type: string;
  error?: Record;
}

type DispatchType = (args: Action) => Action;
