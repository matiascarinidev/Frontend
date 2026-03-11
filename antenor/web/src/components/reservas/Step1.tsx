// components/Step1.tsx
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "./store/slice";
import { RootState } from "./store/store";

export default function Step1() {
  const dispatch = useDispatch();
  const { date, customers, sector } = useSelector(
    (state: RootState) => state.reservation
  );

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Fecha y Hora</h3>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => dispatch(updateField({ date: e.target.value }))}
        className="w-full p-2 border rounded"
        required
      />
      <div>
        <label htmlFor="customers">Comensales:</label>
        <input
          id="customers"
          type="number"
          min="1"
          value={customers}
          onChange={(e) =>
            dispatch(updateField({ customers: parseInt(e.target.value) }))
          }
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="sector">Sector:</label>
        <select
          id="sector"
          value={sector}
          onChange={(e) =>
            dispatch(
              updateField({ sector: e.target.value as "exterior" | "interior" })
            )
          }
          className="w-full p-2 border rounded"
        >
          <option value="exterior">Exterior</option>
          <option value="interior">Interior</option>
        </select>
      </div>
    </div>
  );
}
