import { useCallback } from "react";
import { NumberInput } from "./NumberInput";

export interface ICoefficientColumnProps {
  columnIndex: number;
  values: number[];
  onCoefficientChanged: (row: number, col: number, newValue: number) => void;
}
export const CoefficientColumn = (props: ICoefficientColumnProps) => {
  const coefficientChangedCallback = props.onCoefficientChanged;
  const onValueChanged = useCallback(
    (id: string, newValue: number) => {
      const splitUp = id.split("-");
      const rowIndex = parseInt(splitUp[3]);
      coefficientChangedCallback(rowIndex, props.columnIndex, newValue);
    },
    [coefficientChangedCallback, props.columnIndex]
  );
  return (
    <div
      className="flex grow 
        flex-col"
    >
      {props.values.map((value, rowIndex) => {
        return (
          <NumberInput
            key={`col-${props.columnIndex}-row-${rowIndex}`}
            id={`col-${props.columnIndex}-row-${rowIndex}`}
            value={value}
            onValueChanged={onValueChanged}
          />
        );
      })}
    </div>
  );
};
