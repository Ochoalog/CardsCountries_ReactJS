export default function TextInput({
  id = "id_do_input_text",
  labelDescription = "Descrição do label:",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  autoFocus = false
}) {
  function hadleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        autoFocus
        id={id}
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={hadleInputChange}
      />
    </div>
  );
}
