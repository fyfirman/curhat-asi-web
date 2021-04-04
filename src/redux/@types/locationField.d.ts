interface LocationAction<T> implements Action {
  type: string;
  payload: T;
  error?: {};
}

interface LocationState<T> {
  payload?: IMoms;
  isLoading: T;
  error: Record;
}

type villageAction = LocationAction<IVillage>;
type subDistrictAction = LocationAction<ISubDistrict>;
type districtAction = LocationAction<IDistrict>;
type provinceAction = LocationAction<IProvince>;

type villageState = LocationState<IVillage>;
type subDistrictState = LocationState<ISubDistrict>;
type districtState = LocationState<IDistrict>;
type provinceState = LocationState<IProvince>;
