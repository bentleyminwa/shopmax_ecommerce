import { zodResolver } from "@hookform/resolvers/zod";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../services/firebase";
import { FormFields, useValidate } from "../../shared/hooks/useValidate";

export const useAuth = () => {
  const { schema } = useValidate();

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

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSignIn,
    handleGoogleSignIn,
  };
};
