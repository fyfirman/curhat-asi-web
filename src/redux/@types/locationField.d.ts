interface LocationAction<T> implements Action {
  type: string;
  payload: T;
  error?: {};
}

interface LocationState<T> {
  payload?: T;
  isLoading: boolean;
  error?: Record;
}

type VillageAction = LocationAction<IVillage>;
type SubDistrictAction = LocationAction<ISubDistrict>;
type DistrictAction = LocationAction<IDistrict>;
type ProvinceAction = LocationAction<IProvince>;

type VillageState = LocationState<IVillage>;
type SubDistrictState = LocationState<ISubDistrict>;
type DistrictState = LocationState<IDistrict>;
type ProvinceState = LocationState<IProvince>;
