"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../model/artistFormSchema";
import { createNewArtist } from "../api/createArtist";
import { ArtistFormData } from "../model/types";
import { useAlert, useModal } from "@/shared/model/store";

export const ArtistForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArtistFormData>({
    resolver: yupResolver(schema),
  });

  const [handleCloseModal] = useModal((state) => [state.closeModal]);
  const [toggleAlert] = useAlert((state) => [state.toggleAlert]);

  const onSubmit = async (data: ArtistFormData) => {
    try {
      createNewArtist(data);
      toggleAlert("SUCCESS");
    } catch (error) {
      toggleAlert("ERROR");
    } finally {
      handleCloseModal();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <h1 className="mt-4 text-xl text-center">Create Artist</h1>
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
      <label htmlFor="passwordConfirmation" className="block mt-4">
        Confirm Password
      </label>
      <input
        {...register("passwordConfirmation")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />
      <p className="text-error">{errors.passwordConfirmation?.message}</p>
      <label htmlFor="percent" className="block mt-4">
        Percent
      </label>
      <input
        id="percent"
        type="number"
        {...register("percent")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />
      <p className="text-error">{errors.percent?.message}</p>

      <label htmlFor="role" className="block mt-4">
        Role
      </label>
      <select
        id="role"
        {...register("role")}
        defaultValue="USER"
        className="py-1 px-1 border-[1px] w-full"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <p className="text-error">{errors.role?.message}</p>
      <label htmlFor="date" className="block mt-4">
        Birth Date
      </label>
      <input
        type="date"
        id="date"
        {...register("birthDay")}
        className="border-[1px] w-full py-1 px-1"
      />
      <p className="text-error">{errors.birthDay?.message}</p>
      <input
        type="submit"
        className="mt-10 w-[50%] mx-auto block h-[40px] border-[1px] rounded-lg cursor-pointer bg-primary text-white"
      />
    </form>
  );
};
