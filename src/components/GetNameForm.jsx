import useFormInput from "../hooks/useFormInput";

export default function GetNameForm() {
  const firstNameProps = useFormInput();
  const lastNameProps = useFormInput();

  return (
    <div>
      <h2>
        Hello, {firstNameProps.value} {lastNameProps.value}
      </h2>
      <label>First Name : </label>
      <input {...firstNameProps} />
      <br />
      <label>Last Name : </label>
      <input {...lastNameProps} />
    </div>
  );
}
