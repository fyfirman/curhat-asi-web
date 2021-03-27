interface Action {
  type: string;
  payload?: any;
}

type DispatchType = (args: Action) => Action;
