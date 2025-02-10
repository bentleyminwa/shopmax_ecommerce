import { Button } from "../../../shared/components";
import { useAuth } from "../../../shared/hooks/useAuth";

const AccountInfo = () => {
  const { user, logout } = useAuth();

  return (
    <div className="border border-gray-300 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-700">
        Your Account Information
      </h2>
      <div className="flex flex-col gap-1 my-5 text-sm">
        <p>
          Name:{" "}
          <span className="font-semibold tracking-wider text-gray-700">
            {user?.displayName}
          </span>
        </p>
        <p>
          Email:{" "}
          <span className="font-semibold tracking-wider text-gray-700">
            {user?.email}
          </span>
        </p>
        <p>
          Phone:{" "}
          <span className="font-semibold tracking-wider text-gray-700">
            {user?.phoneNumber}
          </span>
        </p>
      </div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default AccountInfo;
