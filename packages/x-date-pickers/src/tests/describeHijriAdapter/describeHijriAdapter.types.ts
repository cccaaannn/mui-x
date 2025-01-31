import { MuiPickersAdapter } from '@mui/x-date-pickers/models';

export interface DescribeHijriAdapterParams {
  before?: () => void;
  after?: () => void;
}

export type DescribeHijriAdapterTestSuite = <TDate>(params: {
  adapter: MuiPickersAdapter<TDate>;
  testDate: TDate;
}) => void;
