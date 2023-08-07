"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../model/signInSchema";
import { authFormData } from "../model/types";
import { useUser } from "@/shared/model/store";

export const SignIn = async () => {
  const router = useRouter();
  const [fetchUser] = useUser((state) => [state.fetchUser]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<authFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: authFormData) => {
    const res = await fetchUser(data);
    if (res) {
      router.replace("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[420px] mx-auto">
      <h1 className="mt-4 text-xl text-center">Authorization</h1>
      <label htmlFor="login">Login</label>
      <input
        id="login"
        {...register("login")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />
      <p className="text-error">{errors.login?.message}</p>
      <label htmlFor="password" className="block mt-4">
        Password
      </label>
      <input
        id="password"
        {...register("password")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />
      <p className="text-error">{errors.password?.message}</p>
      <input
        type="submit"
        className="mt-10 w-[50%] mx-auto block h-[40px] border-[1px] rounded-lg cursor-pointer bg-primary text-white"
      />
    </form>
  );
};
