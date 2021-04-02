interface UserProfileAction implements Action {
  type: string;
  payload: IMomsProfile;
  error?: {}
}

interface UserProfileState {
  payload?: IMomsProfile ;
  isLoading: boolean;
  error: Record;
}
