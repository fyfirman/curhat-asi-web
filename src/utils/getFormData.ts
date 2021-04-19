const getFormData = (object: any) => Object.keys(object).reduce((formData, key) => {
  console.log(object);
  if (Array.isArray(object[key])) {
    object[key].forEach((data: any) => {
      formData.append(`${key}[]`, data);
    });
    return formData;
  }
  formData.append(key, object[key]);
  return formData;
}, new FormData());

export default getFormData;
