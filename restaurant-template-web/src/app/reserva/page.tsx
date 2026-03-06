"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  date: z.string(),
  time: z.string(),
});

export default function ReservationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await fetch("/api/strapi/reservations", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <input type="text" placeholder="Nombre" className="w-full p-2 border" />
      <input type="email" placeholder="Email" className="w-full p-2 border" />
      <input type="tel" placeholder="Teléfono" className="w-full p-2 border" />
      <input type="date" className="w-full p-2 border" />
      <input type="time" className="w-full p-2 border" />
      <button type="submit" className="bg-black text-white p-2 w-full">
        Confirmar
      </button>
    </form>
  );
}
