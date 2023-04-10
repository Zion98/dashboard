export interface MultipleLinesChartData {
  labels: string[];
  values?: MultipleValuesEntity[] | null;
  percentage: string;
  totalAmount: string;
  direction: string;
}

export interface MultipleValuesEntity {
  label: string;
  data?: number[] | null;
}

export interface SingleLineChartData {
  labels: string[];
  values?: number[] | null;
  totalAmount: string;
  percentage: string;
}
