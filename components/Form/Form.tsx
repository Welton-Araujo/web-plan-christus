import React, { useForm } from "react-hook-form";

type Form = {
  owner: string;
  dependents: string[];
  insurance: string;
  code: string;
  register: string;
  born: Date;
  address: string;
  phones: string[];
};

const Form_TYPE = [
  {
    value: "owner",
    name: "Titular",
    placeholder: "Maria..",
  },
  {
    value: "dependents",
    name: "Dependentes",
    placeholder: "João..",
  },
  {
    value: "insurance",
    name: "Plano",
    placeholder: "Gold",
  },
  {
    value: "code",
    name: "CPF",
    placeholder: "999999999999",
  },
  {
    value: "register",
    name: "RG",
    placeholder: "99999999999999",
  },
  {
    value: "born",
    name: "Nascimento",
    placeholder: "02/07/1990",
  },
  {
    value: "address",
    name: "Endereço",
    placeholder: "Rua Dalton melo, 285",
  },
  {
    value: "phones",
    name: "Telefone",
    placeholder: "85999999999",
  },
];

const Form = () => {
  const { register, handleSubmit, control, reset } = useForm({
    /*     defaultValues: {
      owner: "",
      dependents: [],
      insurance: "",
      code: "",
      register: "",
      born: "",
      address: "",
      phones: [],
    }, */
  });

  const onSubmit = async (data: any) => {
    console.log("data:", data);
  };

  return (
    <div className="flex flex-col gap-8 w-96 h-full bg-neutral-100 p-4 rounded-2xl">
      <div>
        {Form_TYPE.map((types, index) => {
          const teste = types.value;
          return (
            <label key={index} className="flex flex-col text-sm">
              {types.name}:
              <input
                className="w-full p-2 rounded-lg bg-neutral-400 placeholder:text-neutral-700"
                placeholder={types.placeholder}
                {...register(teste)}
              />
            </label>
          );
        })}
      </div>

      <button
        className="bg-neutral-500 rounded-2xl"
        onClick={handleSubmit(onSubmit)}
      >
        Enviar
      </button>
    </div>
  );
};

export default Form;
