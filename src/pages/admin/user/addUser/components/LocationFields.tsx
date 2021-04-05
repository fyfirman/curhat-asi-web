import React, { useEffect } from 'react';
import { requestProvinces } from '@redux/actions/locationsActions/provincesActions';
import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import CustomAutocomplete from './CustomAutocomplete';

const LocationFields = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProvinces());
  }, []);

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
        />
      )}
      {districts.payload && (
        <CustomAutocomplete
          name="districtId"
          options={districts.payload}
          label="Kota/Kabupaten"
          getOptionLabel={(option: IDistrict) => option.name}
        />
      )}

      {subDistricts.payload && (
        <CustomAutocomplete
          name="subDistrictId"
          label="Kecamatan"
          options={subDistricts.payload}
          getOptionLabel={(option: ISubDistrict) => option.name}
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
