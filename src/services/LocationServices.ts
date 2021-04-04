import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

export const getProvinces = () => get<PayloadResponse<IProvince[]>>('api/provinces/', Config.withToken());

export const getDistricts = (provinceId: IDistrict['provinceId']) => get<PayloadResponse<IDistrict[]>>(
  `api/districts/${provinceId}`,
  Config.withToken(),
);

export const getSubDistricts = (districtId: ISubDistrict['districtId']) => get<PayloadResponse<ISubDistrict[]>>(
  `api/sub_districts/${districtId}`,
  Config.withToken(),
);
export const getVillages = (subDistrictId: IVillage['subDistrictId']) => get<PayloadResponse<IVillage[]>>(
  `api/villages/${subDistrictId}`,
  Config.withToken(),
);
