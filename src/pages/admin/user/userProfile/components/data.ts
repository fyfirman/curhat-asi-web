type InfoList = Record<string, string | undefined>;

export const momsProfile = (profile?: IMomsProfile): InfoList => ({
  // 'Nomor Telepon': user.username,
  'Tempat Lahir': profile?.pob,
  'Tanggal Lahir': `${profile?.dob} (${profile?.age} tahun)`,
  Alamat: profile?.address,
  Domisili: profile?.domicile,
  Agama: profile?.religionText,
  'Golongan Darah': profile?.bloodType,
  'Status Pernikahan': profile?.maritalStatusText,
  Pendidikan: profile?.educationText,
  'Pekerjaan/Profesi': profile?.occupationName,
  'Tinggal Dengan': profile?.housemateText,
  'Jumlah yang tinggal dirumah': `${profile?.housematesNumber} orang`,
  'Kepemilikan Rumah': profile?.houseOwnershipText,
});

export const pregnancyInfo = (pregnancy?: IPregnancy): InfoList => ({
  'Tinggi Badan': `${pregnancy?.heightBefore || '-'} cm`,
  'Berat Badan Sebelum Hamil': `${pregnancy?.weightBefore || '-'} kg`,
  'Berat Badan Setelah Melahirkan': `${pregnancy?.weightDuring || '-'} kg`,
  'Pernah Keguguran': pregnancy?.abortusExperienced ? 'Pernah' : 'Tidak Pernah',
  'Jumlah Keguguran': `${pregnancy?.abortusNum || '-'} kali`,
  'Kehamilan ke-': `${pregnancy?.pregnancyNum || '-'}`,
  'Penyakit/Keluhan Saat Hamil': pregnancy?.pregnancyComplaints,
});

export const babyInfo = (baby?: IBaby): InfoList => ({
  'Usia Kehamilan Saat Melahirkan': `${baby?.pregnancyWeeks} minggu`,
  'Berat Badan Bayi': `${baby?.weight} kg`,
  'Panjang/Tinggi Badan Bayi': `${baby?.height} cm`,
  'Diameter Lingkar Kepala Bayi': `${baby?.diameter} cm`,
  'Jenis Kelamin': baby?.gender === 'male' ? 'Laki-laki' : 'Perempuan',
  Asupan: `${baby?.feeds}`,
  'Inisiasi Menyusui Dini': baby?.imd ? 'Ya' : 'Tidak',
  'Waktu IMD': baby?.oneHourInit ? 'Lebih dari satu jam' : 'Kurang dari satu jam',
  'Cara Melahirkan': baby?.birthProccess,
});

export const husbandInfo = (husband?: IHusband): InfoList => ({
  Relasi: husband?.relationTypeText,
  Nama: husband?.name,
  'Tempat Lahir': husband?.pob,
  'Tanggal Lahir': husband?.dob,
  Agama: husband?.religionText,
  Pendidikan: husband?.educationText,
  'Pekerjaan/Profesi': husband?.occupationName,
});
