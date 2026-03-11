// components/Step2.tsx
"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "./store/slice";
import { RootState } from "./store/store";

export default function Step2() {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector(
    (state: RootState) => state.reservation
  );

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Tus Datos</h3>
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => dispatch(updateField({ name: e.target.value }))}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => dispatch(updateField({ email: e.target.value }))}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => dispatch(updateField({ phone: e.target.value }))}
        className="w-full p-2 border rounded"
        required
      />
    </div>
  );
}
