import { Router } from "next/router";
import React, { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import myAxios from "@/utils/axios";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [modalswitch, setModalswitch] = useState(false);

  const [formUserData, setLoginUserData] = useState({
    email: "naraa@gmail.com",
    password: "",
    rePassword: "",
    name: "",
    currency_type: "",
    balance: 0,
  });

  const changeFormUserData = (key, value) => {
    setLoginUserData({ ...formUserData, [key]: value });
  };

  const signup = async () => {
    if (
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.rePassword ||
      !formUserData.name
    ) {
      alert("Хоосон талбаруууд байж болохгүй");
      return;
    }

    if (formUserData.password !== formUserData.rePassword) {
      alert("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const { data } = await myAxios.post("/auth/signup", {
        email: formUserData.email,
        password: formUserData.password,
        name: formUserData.name,
      });
      console.log(setUser);
      setUser(data.user);
      router.push("/signup/stepone");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const login = async () => {
    if (!formUserData.email || !formUserData.password) {
      alert("aaa");
      return;
    }

    if (!formUserData.email.includes("@")) {
      alert("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }
    try {
      setLoading(true);
      const { data } = await myAxios.post("/auth/signin", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loading,
        formUserData,
        changeFormUserData,
        setLoginUserData,
        setUser,
        modalswitch,
        setModalswitch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
