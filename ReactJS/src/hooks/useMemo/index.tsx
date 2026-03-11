import { useMemo, useState } from "react";

export const UseMemoLab = () => {
  const [count, setCount] = useState(0); // State Ringan
  const [heavyTrigger, setHeavyTrigger] = useState(0); // State Berat

  // 1. Simulasi Hitungan Berat
  const data = useMemo(() => {
    console.time("🔥 Proses Berat Berjalan");
    const result = Array.from({ length: 10000000 }, (_, i) => i);
    console.timeEnd("🔥 Proses Berat Berjalan");
    return result;
  }, [heavyTrigger]); // HANYA berhitung ulang jika heavyTrigger berubah

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Data: {data.length}</h2>

      {/* Tombol A: Update ringan, harusnya INSTAN */}
      <div style={{ marginBottom: "10px" }}>
        <p>Counter: {count} (Gak ada hubungannya sama data berat)</p>
        <button onClick={() => setCount((c) => c + 1)}>
          Update Counter (Cepat)
        </button>
      </div>

      <hr />

      {/* Tombol B: Update berat, pasti LAG */}
      <div>
        <p>Trigger Berat: {heavyTrigger}</p>
        <button onClick={() => setHeavyTrigger((h) => h + 1)}>
          Trigger Hitung Ulang (Pasti Lag)
        </button>
      </div>
    </div>
  );
};
