import UserGroup from '@constants/UserGroupEnum';
import {
  mommiesTypes,
  cadresTypes,
  conselorsTypes,
  midwifesTypes,
  doctorGeneralTypes,
  doctorSpecialistTypes,
} from './userListActionTypes';

export const SUCCESS = {
  [UserGroup.Mommies]: mommiesTypes.FETCH_MOMMIES_SUCCESS,
  [UserGroup.Cadre]: cadresTypes.FETCH_CADRES_SUCCESS,
  [UserGroup.Conselor]: conselorsTypes.FETCH_CONSELORS_SUCCESS,
  [UserGroup.Midwife]: midwifesTypes.FETCH_MIDWIFES_SUCCESS,
  [UserGroup.DoctorGeneral]: doctorGeneralTypes.FETCH_DOCTOR_GENERAL_SUCCESS,
  [UserGroup.DoctorSpecialist]:
    doctorSpecialistTypes.FETCH_DOCTOR_SPECIALIST_SUCCESS,
};

export const FAILURE = {
  [UserGroup.Mommies]: mommiesTypes.FETCH_MOMMIES_FAILURE,
  [UserGroup.Cadre]: cadresTypes.FETCH_CADRES_FAILURE,
  [UserGroup.Conselor]: conselorsTypes.FETCH_CONSELORS_FAILURE,
  [UserGroup.Midwife]: midwifesTypes.FETCH_MIDWIFES_FAILURE,
  [UserGroup.DoctorGeneral]: doctorGeneralTypes.FETCH_DOCTOR_GENERAL_FAILURE,
  [UserGroup.DoctorSpecialist]:
    doctorSpecialistTypes.FETCH_DOCTOR_SPECIALIST_FAILURE,
};
