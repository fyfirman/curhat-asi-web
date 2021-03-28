interface TimeStamp{
  createdAt: string;
  updatedAt: string;
}

interface Action {
  type: string;
  payload?: any;
}

type DispatchType = (args: Action) => Action;
