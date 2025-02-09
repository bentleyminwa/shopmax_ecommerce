import { zodResolver } from "@hookform/resolvers/zod";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { FormFields, useValidate } from "./useValidate";

export const useLogin = () => {
  const { schema } = useValidate();
  const navigate = useNavigate();

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
      navigate("/shop");
    } catch (err) {
      console.log(err);
    }
  };

  async function handleGoogleSignIn() {
    const googleProvider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, googleProvider);
      reset();
      navigate("/shop");
    } catch (err) {
      console.error(err);
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSignIn,
    handleGoogleSignIn,
  };
};
