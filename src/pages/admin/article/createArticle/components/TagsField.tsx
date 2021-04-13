import CustomAutocomplete from '@components/CustomAutocomplete';

const mockData : { title: string }[] = [
  { title: 'Halo' },
  { title: 'Halo 1' },
  { title: 'Halo 2' },
];

const TagsField = () => {
  return (
    <CustomAutocomplete
      label="Tag"
      name="tags"
      multiple
      options={mockData}
      getOptionLabel={({ title }: any) => title}

    />
  );
};

export default TagsField;
