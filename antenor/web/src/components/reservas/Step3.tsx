// components/Step3.tsx
"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "./store/slice";
import { RootState } from "./store/store";

export default function Step3() {
  const dispatch = useDispatch();
  const { description } = useSelector((state: RootState) => state.reservation);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Preferencias</h3>
      <div>
        <label htmlFor="celiaco">Celiacos:</label>
        <input
          id="celiaco"
          type="number"
          min="0"
          value={description.celiaco}
          onChange={(e) =>
            dispatch(
              updateField({
                description: {
                  ...description,
                  celiaco: parseInt(e.target.value),
                },
              })
            )
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="vegetarian">Vegetariano: </label>
        <input
          id="vegetarian"
          type="number"
          min="0"
          value={description.vegetariano}
          onChange={(e) =>
            dispatch(
              updateField({
                description: {
                  ...description,
                  vegetariano: parseInt(e.target.value),
                },
              })
            )
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="vegan">Vegano:</label>
        <input
          id="vegan"
          type="number"
          min="0"
          value={description.vegano}
          onChange={(e) =>
            dispatch(
              updateField({
                description: {
                  ...description,
                  vegano: parseInt(e.target.value),
                },
              })
            )
          }
          className="w-full p-2 border rounded"
        />
      </div>
      {/* Repetir para vegan y vegetariano */}
    </div>
  );
}
