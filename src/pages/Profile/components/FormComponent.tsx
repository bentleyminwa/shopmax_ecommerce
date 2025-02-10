import { FaGoogle } from "react-icons/fa6";
import { useLogin } from "../../../shared/hooks/useLogin";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    onSignIn,
    handleGoogleSignIn,
    errors,
    isSubmitting,
  } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSignIn)}
      className="border border-gray-200 rounded-lg p-6"
    >
      <div>
        <h2 className="text-3xl font-semibold tracking-wider mb-5">Sign In</h2>
        <p className="text-sm tracking-wide font-semibold text-gray-600 mb-5">
          Sign In with an Open Account
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center gap-3 border border-gray-400 text-gray-700 p-2 rounded-xl mb-5"
        >
          <span className="text-xl">
            <FaGoogle />
          </span>
          <span className="text-sm font-semibold">Google</span>
        </button>
        <p className="text-sm tracking-wide font-semibold text-gray-600 mb-5 border-t border-t-gray-300 pt-5">
          Or Continue with Email Address
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="email"
          {...register("email")}
          className="border border-gray-300 p-3 text-sm font-semibold text-gray-800 focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password")}
          className="border border-gray-300 p-3 text-sm font-semibold text-gray-800 focus:outline-none"
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-fit border p-2 bg-black text-sm text-white uppercase tracking-widest"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
