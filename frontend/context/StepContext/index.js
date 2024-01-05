import axios from "axios";
import { UserContext } from "../UserProvider";
import { useRouter } from "next/router";
import myAxios from "@/utils/axios";

const { createContext, useState, useContext } = require("react");

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [stepData, setStepData] = useState({
    currency_type: "",
    balance: 10,
  });

  const changeStepData = (key, value) => {
    setStepData(() => ({ ...stepData, [key]: value }));
  };
  const toSteptwo = () => {
    router.push("/signup/steptwo");
  };
  const toStepthree = () => {
    router.push("/signup/stepthree");
  };

  const goToDashboard = async () => {
    try {
      const { data } = await myAxios.put("/users/" + user.id, {
        currency_type: stepData.currency_type,
        balance: stepData.balance,
      });
      console.log("first", data);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <StepContext.Provider
      value={{
        stepData,
        changeStepData,
        goToDashboard,
        toSteptwo,
        toStepthree,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
