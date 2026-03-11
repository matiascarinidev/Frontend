// components/Step4.tsx
"use client";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function Test() {
  const reservation = useSelector((state: RootState) => state.reservation);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Resumen</h3>
      <pre>{JSON.stringify(reservation, null, 2)}</pre>
    </div>
  );
}
