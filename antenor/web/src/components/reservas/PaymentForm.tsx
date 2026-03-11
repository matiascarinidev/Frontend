"use client";
import { useEffect, useRef } from "react";
import { loadMercadoPago } from "@mercadopago/sdk-js";

declare global {
  interface Window {
    MercadoPago: {
      new (publicKey: string): MercadoPagoInstance;
    };
  }
}

interface MercadoPagoInstance {
  checkout: (options: CheckoutOptions) => void;
}

interface CheckoutOptions {
  preference: {
    id: string;
  };
  render: {
    container: string;
    label: string;
  };
  autoOpen?: boolean;
  theme?: {
    elementsColor?: string;
    headerColor?: string;
  };
}

type PaymentFormProps = {
  amount: number;
  reservaId: string;
  onError: (error: string) => void;
};

export default function PaymentForm({
  amount,
  reservaId,
  onError,
}: PaymentFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const initializeMercadoPago = async () => {
      try {
        await loadMercadoPago();

        if (!window.MercadoPago) {
          throw new Error("MercadoPago SDK failed to load");
        }

        const mp = new window.MercadoPago(
          process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!
        );

        const response = await fetch("/api/mercado-pago/create-preference", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            reserva_id: reservaId,
            description: `Reserva para ${reservaId}`,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create preference");
        }

        const { preference_id } = (await response.json()) as {
          preference_id: string;
        };

        mp.checkout({
          preference: {
            id: preference_id,
          },
          render: {
            container: ".mp-checkout-container",
            label: "Pagar",
          },
          autoOpen: true,
          theme: {
            elementsColor: "#000",
            headerColor: "#000",
          },
        });
      } catch (error) {
        onError(error instanceof Error ? error.message : "Unknown error");
      }
    };

    initializeMercadoPago();
  }, [amount, reservaId, onError]);

  return (
    <div>
      <div className="mp-checkout-container" />
      <div className="hidden">
        <form ref={formRef} id="mp-form"></form>
      </div>
    </div>
  );
}
