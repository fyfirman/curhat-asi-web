import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

type userGroupEnum = 'admin' | 'bdn' | 'cons' | 'dsp' | 'du' | 'mommy' | 'kdr';

export const getUserCount = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/usercount/${userGroup}`,
    Config.withToken(),
  );
};

export const getUserMonthCount = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<IUserPerMonth>>(
    `api/dashboard/statistic/usermonthcount/${userGroup}`,
    Config.withToken(),
  );
};

export const getUserbyAge = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getuserbyage/${userGroup}`,
    Config.withToken(),
  );
};

export const getLast30DaysUser = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getlast30daysuser/${userGroup}`,
    Config.withToken(),
  );
};

export const getNoProfileUser = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<number>>(
    `api/dashbaord/statistic/getnoprofileuser/${userGroup}`,
    Config.withToken(),
  );
};

export const getConsultationCount = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getconsultationcount`,
    Config.withToken(),
  );
};

export const getActiveConsultationCount = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getactiveconsultationcount`,
    Config.withToken(),
  );
};

export const getLast30DaysConsultation = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getlast30daysconsultation`,
    Config.withToken(),
  );
};

export const getConsultationperMonth = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/consultationmonthcount`,
    Config.withToken(),
  );
};

export const getMaxRoleConsultation = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getlastroleconsultation`,
    Config.withToken(),
  );
};

export const getActiveArticle = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getactivearticle`,
    Config.withToken(),
  );
};

export const getTotalRating = () => {
  return get<PayloadResponse<number>>(`api/dashboard/statistic/gettotalrating`, Config.withToken());
};

export const getRateAverage = () => {
  return get<PayloadResponse<number>>(`api/dashboard/statistic/getrateaverage`, Config.withToken());
};

export const geArticleRatesperMonth = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getarticleratespermonth`,
    Config.withToken(),
  );
};

export const getRatesperPoint = () => {
  return get<PayloadResponse<any>>(`api/dashboard/statistic/getratesperpoint`, Config.withToken());
};
