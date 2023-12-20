import { registerForm } from "../interfaces";
import { useForm, SubmitHandler } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerForm>();

  const onSubmit: SubmitHandler<registerForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center py-20 min-h-screen bg-slate-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 bg-slate-200 h-min p-6 rounded-lg"
      >
        <input
          {...register("name", {
            validate: (value) => {
              if (value) {
                if (value.length < 4 || value.length > 20) {
                  return "Name can be between 4 and 20 characters";
                }
              } else return "Please enter your name";
            },
          })}
          className="bg-slate-50 rounded-lg p-1 outline-none"
          type="text"
          placeholder="name"
        />
        <div className="h-2 flex justify-center items-center">
          {errors.name && (
            <div className="text-xs text-red-600">
              {errors.name.message}
            </div>
          )}
        </div>
        <input
          {...register("email", {
            validate: (value) => {
              if (
                value &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
              ) {
                return "Email is not valid";
              }
              if (!value) {
                return "Please enter your email";
              }
            },
          })}
          className="bg-slate-50 rounded-lg p-1 outline-none"
          type="email"
          placeholder="email"
        />
         <div className="h-2 flex justify-center items-center">
          {errors.email && (
            <div className="text-xs text-red-600">
              {errors.email.message}
            </div>
          )}
        </div>
        <input
          {...register("password", {
            validate: (value) => {
              if (value) {
                if (!/[A-Z]/.test(value)) {
                  return "Password should include at least one uppercase letter";
                }
                if (value.length < 6 || value.length > 20) {
                  return "Password should be between 6 and 20 characters";
                }
              } else return "Please enter password";
            },
          })}
          className="bg-slate-50 rounded-lg p-1 outline-none"
          type="password"
          placeholder="password"
        />
        <div className="h-2 flex justify-center items-center">
          {errors.password && (
            <div className="text-xs text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>
        <input
          {...register("password2", {
            validate: (value) => {
              if (value) {
                if (!/[A-Z]/.test(value)) {
                  return "Password should include at least one uppercase letter";
                }
                if (value.length < 6 || value.length > 20) {
                  return "Password should be between 6 and 20 characters";
                }
                if (value !== watch("password")) {
                  return "Paswords should match";
                }
              } else return "Please repeat password";
            },
          })}
          className="bg-slate-50 rounded-lg p-1 outline-none"
          type="password"
          placeholder="repeat password"
        />
        <div className="h-2 flex justify-center items-center">
          {errors.password2 && (
            <div className="text-xs text-red-600">
              {errors.password2.message}
            </div>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
