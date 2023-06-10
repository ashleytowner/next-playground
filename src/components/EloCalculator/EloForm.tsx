'use client';

export type EloFormValues = {
  elo1: number;
  elo2: number;
  kFactor: number;
}

type EloFormProps = {
  onChange?: (e: EloFormValues) => void,
  value?: EloFormValues
}

export default function EloForm(props: EloFormProps) {
  const { elo1, elo2, kFactor } = props.value || { elo1: 1500, elo2: 1500, kFactor: 16 };

  const handleChange = (elo1: number, elo2: number, kFactor: number) => {
    props.onChange && props.onChange({ elo1, elo2, kFactor });
  }

  return (
    <form>
      <fieldset className="flex w-full">
        <p className="w-1/2 p-1">
          <label htmlFor="elo_1">Elo 1</label>
          <input
            className="w-full"
            type="number"
            id="elo_1"
            name="elo1"
            value={elo1}
            onChange={(e) => handleChange(Number(e.target.value), elo2, kFactor)} 
          />
        </p>
        <p className="w-1/2 p-1">
          <label htmlFor="elo_2">Elo 2</label>
          <input
            className="w-full"
            type="number"
            id="elo_2"
            name="elo2"
            value={elo2}
            onChange={(e) => handleChange(elo1, Number(e.target.value), kFactor)} 
          />
        </p>
      </fieldset >
      <fieldset>
        <p className="w-full p-1">
          <label htmlFor="k-factor">K Factor</label>
          <input
            className="w-full"
            type="number"
            id="k-factor"
            name="kFactor"
            value={kFactor}
            onChange={(e) => handleChange(elo1, elo2, Number(e.target.value))}
          />
        </p>
      </fieldset>
    </form >
  )
}
