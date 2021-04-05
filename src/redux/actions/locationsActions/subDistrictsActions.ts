import { subDistrictsTypes } from '@redux/constants/locationsActionTypes';
import * as LocationServices from '@services/LocationServices';

export const requestVillages = (districtId: IDistrict['id']) => async (dispatch: DispatchType) => {
  try {
    const response = await LocationServices.getSubDistricts(districtId);

    dispatch(requestVillagesSuccess(response as ISubDistrict[]));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestVillagesFailure());
  }
};

export const requestVillagesSuccess = (subDistricts: ISubDistrict[]) => ({
  type: subDistrictsTypes.FETCH_SUB_DISTRICTS_SUCCESS,
  payload: subDistricts,
});

export const requestVillagesFailure = () => ({
  type: subDistrictsTypes.FETCH_SUB_DISTRICTS_FAILURE,
});
