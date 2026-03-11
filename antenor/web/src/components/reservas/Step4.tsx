import { useState } from "react";
import PaymentForm from "./PaymentForm";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";

export default function Step4() {
  const [paymentError, setPaymentError] = useState("");
  const { customers, id } = useSelector(
    (state: RootState) => state.reservation
  );
  console.log(customers);
  // Calcular 10% de $39000 por comensal
  const calculateDeposit = () => {
    const PRICE_PER_CUSTOMER = 39000;
    return customers * PRICE_PER_CUSTOMER * 0.1;
  };
  const totalAmmount = () => {
    const PRICE_PER_CUSTOMER = 39000;
    return customers * PRICE_PER_CUSTOMER;
  };
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Pago de seña</h3>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="font-medium">Detalles del pago:</p>
        <ul className="mt-2 space-y-2">
          <li>Monto por comensal: $39,000 ARS</li>
          <li>Monto Total: ${totalAmmount().toLocaleString()} ARS</li>

          <li>
            Seña (10%):{" "}
            <span className="font-bold">
              ${calculateDeposit().toLocaleString()} ARS
            </span>
          </li>
        </ul>
      </div>

      <PaymentForm
        amount={calculateDeposit()}
        reservaId={id}
        onError={(error) => setPaymentError(error)}
      />

      {paymentError && (
        <p className="text-red-500 text-sm mt-2">{paymentError}</p>
      )}

      <div className="text-xs text-gray-500 mt-4">
        <p>
          Al continuar, aceptas nuestros{" "}
          <a href="/terminos" className="text-blue-600">
            Términos y Condiciones
          </a>
          .
        </p>
      </div>
    </div>
  );
}
