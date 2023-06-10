"use client";

import { useState } from "react";
import EloForm, { EloFormValues } from "./EloForm";
import EloTable from "./EloTable";

export default function EloCalculator() {
  const [eloFormState, setEloFormState] = useState<EloFormValues>({
    elo1: 1500,
    elo2: 1500,
    kFactor: 16
  });
  return (
    <>
      <h1>Elo Calculator</h1>
      <EloForm value={eloFormState} onChange={(e) => setEloFormState(e)} />
      <EloTable value={eloFormState} />
    </>
  )
}
