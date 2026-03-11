import { Dish } from "@/types/menu";

interface MenuStepsProps {
  readonly steps: {
    readonly entradas: Dish[];
    readonly parrilla: Dish[];
    readonly postres: Dish[];
    readonly bebidas: Dish[];
  };
}

export default function MenuSteps({ steps }: MenuStepsProps) {
  return (
    <div className="space-y-12">
      {Object.entries(steps).map(([stepName, dishes]) => (
        <section key={stepName}>
          <h2 className="text-2xl font-bold mb-4 capitalize">{stepName}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {dishes.map((dish) => (
              <div key={dish.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">{dish.name}</h3>
                <p className="text-gray-600 text-sm">{dish.description}</p>
                <span className="block mt-2 font-medium">
                  ${dish.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
