import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { requestProvinces } from '@redux/actions/locationsActions/provincesActions';
import { requestDistricts } from '@redux/actions/locationsActions/districtsActions';
import { requestSubDistricts } from '@redux/actions/locationsActions/subDistrictsActions';
import { requestVillages } from '@redux/actions/locationsActions/villagesActions';
import CustomAutocomplete from './CustomAutocomplete';

const LocationFields = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProvinces());
  }, []);

  const handleProvinceChange = (_: any, province: IProvince) => {
    dispatch(requestDistricts(province.id));
  };

  const handleDistrictChange = (_: any, district: IDistrict) => {
    dispatch(requestSubDistricts(district.id));
  };

  const handleSubDistrictChange = (_: any, subDistrict: ISubDistrict) => {
    dispatch(requestVillages(subDistrict.id));
  };

  const {
    provinces, villages, districts, subDistricts,
  } = useSelector((state: RootState) => state.locations);

  return (
    <>
      {provinces.payload && (
        <CustomAutocomplete
          name="provinceId"
          label="Provinsi"
          options={provinces.payload}
          getOptionLabel={(option: IProvince) => option.name}
          onChange={handleProvinceChange}
        />
      )}
      {districts.payload && (
        <CustomAutocomplete
          name="districtId"
          options={districts.payload}
          label="Kota/Kabupaten"
          getOptionLabel={(option: IDistrict) => option.name}
          onChange={handleDistrictChange}
        />
      )}

      {subDistricts.payload && (
        <CustomAutocomplete
          name="subDistrictId"
          label="Kecamatan"
          options={subDistricts.payload}
          getOptionLabel={(option: ISubDistrict) => option.name}
          onChange={handleSubDistrictChange}
        />
      )}
      {villages.payload && (
        <CustomAutocomplete
          name="villageId"
          label="Kelurahan/Desa"
          options={villages.payload}
          getOptionLabel={(option: IVillage) => option.name}
        />
      )}
    </>
  );
};

export default LocationFields;
