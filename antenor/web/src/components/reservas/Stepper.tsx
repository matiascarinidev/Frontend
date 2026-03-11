"use client"
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function Stepper() {
  const currentStep = useSelector((state: RootState) => state.reservation.step);
  const steps = ["Fecha", "Datos", "Preferencias", "Confirmar"];

  return (
    <div className="flex justify-center mb-8 text-black">
      {steps.map((label, index) => (
        <div key={label} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center  
              ${currentStep >= index ? "bg-black text-white" : "bg-gray-200"}`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-1 ${
                currentStep > index ? "bg-black" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
