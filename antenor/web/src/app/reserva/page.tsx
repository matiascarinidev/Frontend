// page.tsx
"use client";
import { RootState } from "@/components/reservas/store/store";
import Stepper from "@/components/reservas/Stepper";
import Step1 from "@/components/reservas/Step1";
import Step2 from "@/components/reservas/Step2";
import Step3 from "@/components/reservas/Step3";
import Step4 from "@/components/reservas/Step4";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "@/components/reservas/store/slice";
import Test from "@/components/reservas/Test";
export default function ReservaPage() {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.reservation.step);
  const steps = [
    <Step1 key={0} />,
    <Step2 key={1} />,
    <Step3 key={2} />,
    <Step4 key={3} />,
    <Test key={4} />,
  ];

  const handleNext = () => {
    if (step < steps.length - 1) dispatch(setStep(step + 1));
  };

  const handleBack = () => {
    if (step > 0) dispatch(setStep(step - 1)); //
  };

  return (
    <div className="max-w-md mx-auto p-4 ">
      <Stepper />
      <div className="slider-content">{steps[step]}</div>
      <div className="flex justify-between mt-8">
        {step > 0 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 rounded-lg border-2 text-black"
          >
            Atrás
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Confirmar Reserva
          </button>
        )}
      </div>
    </div>
  );
}
