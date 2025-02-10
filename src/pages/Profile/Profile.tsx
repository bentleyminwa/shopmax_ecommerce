import { useEffect } from "react";
import { useAuth } from "../../shared/hooks/useAuth";
import { AccountInfo, FormComponent } from "./components";

const Profile = () => {
  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <div className="w-2/3 lg:w-1/3 mx-auto my-10">
        {user ? <AccountInfo /> : <FormComponent />}
      </div>
    </section>
  );
};

export default Profile;
