import { useCallback, useState } from "react";
import { REGEX_EMAIL } from "const";
import { InputProps } from "types";

const Input = ({
  label,
  icon,
  type = "text",
  validator,
  placeholder,
  toggleFunction,
}: InputProps) => {
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const inputValidator = useCallback((value: string, validator?: string) => {
    if (validator) {
      switch (validator) {
        case "firstname":
          if (!value.length) {
            setError({
              isError: true,
              message: "First name cannot empty",
            });
          } else {
            setError({
              isError: false,
              message: "",
            });
          }
          break;
        case "lastname":
          if (!value.length) {
            setError({
              isError: true,
              message: "Last name cannot empty",
            });
          } else {
            setError({
              isError: false,
              message: "",
            });
          }
          break;
        case "email":
          if (!value.length) {
            setError({
              isError: true,
              message: "Please fill the email",
            });
          } else if (!value.toLowerCase().match(REGEX_EMAIL)) {
            setError({
              isError: true,
              message: "Email is not valid",
            });
          } else {
            setError({
              isError: false,
              message: "",
            });
          }
          break;
        case "password":
          if (!value.length) {
            setError({
              isError: true,
              message: "Please fill the password",
            });
          } else {
            setError({
              isError: false,
              message: "",
            });
          }
          break;
      }
    }
  }, []);

  return (
    <div className="my-2">
      <label className="text-sm">{label}</label>
      <div
        className={`flex items-center border-2 rounded-md overflow-hidden mt-2 bg-white  ${
          error.isError ? "!border-red-600" : "border-slate-500"
        } `}
      >
        <i className="mx-2 text-2xl ">{error.isError && icon}</i>
        <input
          className="w-full focus:outline-none focus:ring-0 text-xl py-2 pr-2"
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          onBlur={(e) => inputValidator(e.target.value, validator)}
          onChange={(e) => toggleFunction!(e.target.value)}
        />
      </div>
      {error.isError && (
        <span className="text-sm text-red-600">{error.message}</span>
      )}
    </div>
  );
};

export default Input;
