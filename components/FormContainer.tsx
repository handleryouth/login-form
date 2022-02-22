import { useState } from "react";
import bcryptjs from "bcryptjs";
import { useImmer } from "use-immer";
import ReactLoading from "react-loading";
import { CREATE_CREDENTIALS } from "utils";
import { LoginConfig } from "types";
import { RiErrorWarningFill } from "react-icons/ri";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Input from "./Input";
import Portal from "./Portal";

const FormContainer = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const [createCredentials, { loading }] = useMutation(CREATE_CREDENTIALS, {
    onCompleted: () => router.push("/credential/signin"),
    onError: (err) => setErrorMessage(err.message),
  });
  const [credentialForm, setCredentialForms] = useImmer<LoginConfig>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  return (
    <>
      <Portal visible={loading}>
        <div className=" absolute z-20 bg-black/50  min-h-screen flex items-center justify-center w-full">
          <ReactLoading type={"spin"} color={"white"} height={50} width={50} />
        </div>
      </Portal>

      <div>
        <Input
          icon={<RiErrorWarningFill />}
          label="First name"
          placeholder="First name"
          validator="firstname"
          toggleFunction={(value) =>
            setCredentialForms((draft) => void (draft.firstname = value))
          }
        />
        <Input
          icon={<RiErrorWarningFill />}
          label="Last name"
          placeholder="last name"
          validator="lastname"
          toggleFunction={(value) =>
            setCredentialForms((draft) => void (draft.lastname = value))
          }
        />
        <Input
          icon={<RiErrorWarningFill />}
          label="Email"
          placeholder="Email"
          validator="email"
          toggleFunction={(value) =>
            setCredentialForms((draft) => void (draft.email = value))
          }
        />

        <Input
          icon={<RiErrorWarningFill />}
          label="Password"
          placeholder="Password"
          type="password"
          validator="password"
          toggleFunction={(value) =>
            setCredentialForms((draft) => void (draft.password = value))
          }
        />

        {errorMessage && <p className="text-center">{errorMessage}</p>}

        <button
          disabled={Object.values(credentialForm).some((x) => x === "")}
          className="mt-2 bg-green-400 text-white text-center w-full py-4 rounded-md hover:bg-green-400/60 disabled:bg-gray-500 transition-colors"
          onClick={() =>
            createCredentials({
              variables: {
                input: {
                  ...credentialForm,
                  password: bcryptjs.hashSync(credentialForm.password),
                },
              },
            })
          }
        >
          CLAIM YOUR FREE TRIAL
        </button>

        <p className="text-center text-white mt-4 text-xs">
          by clicking this button, you are aggreeing to our{" "}
          <span className="font-bold text-red-500">Terms and Services</span>{" "}
        </p>

        <p className="text-center mt-4">
          Have an account ?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => router.push("/credential/signin")}
          >
            click here
          </span>
        </p>
      </div>
    </>
  );
};

export default FormContainer;
