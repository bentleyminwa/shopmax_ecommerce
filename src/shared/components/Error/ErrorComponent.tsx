import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const ErrorComponent = () => {
  const navigate = useNavigate();
  const error = new Error("An unexpected error occurred");

  return (
    <div>
      <h2>Product Error</h2>
      <p>{error.message}</p>
      <Button onClick={() => navigate("/shop")}>Go To Shop</Button>
    </div>
  );
};

export default ErrorComponent;
