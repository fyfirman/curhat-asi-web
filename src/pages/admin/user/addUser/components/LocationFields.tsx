import React from 'react';
import CustomAutocomplete from './CustomAutocomplete';

const LocationFields = () => {
  return (
    <>
      <CustomAutocomplete
        name="provinceId"
        label="Provinsi"
        getOptionLabel={(option: IProvince) => option.name}
      />
      <CustomAutocomplete
        name="districtId"
        label="Kota/Kabupaten"
        getOptionLabel={(option: IProvince) => option.name}
      />
      <CustomAutocomplete
        name="subDistrictId"
        label="Kecamatan"
        getOptionLabel={(option: IProvince) => option.name}
      />
      <CustomAutocomplete
        name="villageId"
        label="Kelurahan/Desa"
        getOptionLabel={(option: IProvince) => option.name}
      />
    </>
  );
};

export default LocationFields;
