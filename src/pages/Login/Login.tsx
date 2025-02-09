import { zodResolver } from "@hookform/resolvers/zod";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { z } from "zod";
import { auth } from "../../services/firebase";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one letter and one number"
    ),
});

type FormFields = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSignIn: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  async function handleGoogleSignIn() {
    const googleProvider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, googleProvider);
      reset();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="w-full">
      <div className="w-2/3 lg:w-1/3 mx-auto my-10">
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
      </div>
    </section>
  );
};

export default Login;
