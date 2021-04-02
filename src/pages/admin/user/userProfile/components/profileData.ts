export const momsProfile = (user : IUser): Record<string, string | undefined> => ({
  'Nomor Telepon': user.username,
  'Tempat Lahir': user.profile?.pob,
  'Tanggal Lahir': `${user.profile?.dob} (${user.profile?.age} tahun)`,
  Alamat: user.profile?.address,
  Domisili: user.profile?.domicile,
  Agama: user.profile?.religionText,
  'Golongan Darah': user.profile?.bloodType,
  'Status Pernikahan': user.profile?.maritalStatusText,
  Pendidikan: user.profile?.educationText,
  'Pekerjaan/Profesi': user.profile?.occupationName,
  'Tinggal Dengan': user.profile?.housemateText,
  'Jumlah yang tinggal dirumah': `${user.profile?.housematesNumber} orang`,
  'Kepemilikan Rumah': user.profile?.houseOwnershipText,
});

export const consultationProfile = (
  _profile : IMomsProfile,
): Record<string, string | undefined> => ({

});
