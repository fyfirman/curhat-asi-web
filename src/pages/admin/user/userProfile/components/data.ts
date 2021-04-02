type InfoList = Record<string, string | undefined>;

export const momsProfile = (user : IMoms): InfoList => ({
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

export const pregnancyInfo = (
  pregnancy?: IPregnancy,
): InfoList => ({
  'Tinggi Badan': `${pregnancy?.heightBefore || '-'} cm`,
  'Berat Badan Sebelum Hamil': `${pregnancy?.weightBefore || '-'} kg`,
  'Berat Badan Setelah Melahirkan': `${pregnancy?.weightDuring || '-'} kg`,
  'Pernah Keguguran': pregnancy?.abortusExperienced ? 'Pernah' : 'Tidak Pernah',
  'Jumlah Keguguran': `${pregnancy?.abortusNum || '-'} kali`,
  'Kehamilan ke-': `${pregnancy?.pregnancyNum || '-'}`,
  'Penyakit/Keluhan Saat Hamil': `${pregnancy?.pregnancyComplaints || '-'}`,

});
