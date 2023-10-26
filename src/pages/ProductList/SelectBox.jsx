import Select from 'react-select';

function SelectBox({ limit, onLimitChange }) {
  const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 5, label: '5' },
  ];

  const handleChange = selectedOption => {
    onLimitChange(selectedOption.value);
  };

  return (
    <Select
      value={options.find(option => option.value === limit)}
      onChange={handleChange}
      options={options}
    />
  );
}

export default SelectBox;
