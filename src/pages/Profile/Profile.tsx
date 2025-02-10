import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useAuth } from "../../shared/hooks/useAuth";
import { useLogin } from "../../shared/hooks/useLogin";

const Profile = () => {
  const {
    register,
    handleSubmit,
    onSignIn,
    handleGoogleSignIn,
    errors,
    isSubmitting,
  } = useLogin();
  const { user, logout } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <div className="w-2/3 lg:w-1/3 mx-auto my-10">
        {user ? (
          <div className="border border-gray-300 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Your Account Information
            </h2>
            <div className="flex flex-col gap-1 my-5 text-sm">
              <p>
                Name:{" "}
                <span className="font-semibold tracking-wider text-gray-700">
                  {user.displayName}
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="font-semibold tracking-wider text-gray-700">
                  {user.email}
                </span>
              </p>
              <p>
                Phone:{" "}
                <span className="font-semibold tracking-wider text-gray-700">
                  {user.phoneNumber}
                </span>
              </p>
            </div>
            <button
              onClick={logout}
              className="bg-black text-white p-2 tracking-wide cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSignIn)}
            className="border border-gray-200 rounded-lg p-6"
          >
            <div>
              <h2 className="text-3xl font-semibold tracking-wider mb-5">
                Sign In
              </h2>
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
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
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
        )}
      </div>
    </section>
  );
};

export default Profile;
