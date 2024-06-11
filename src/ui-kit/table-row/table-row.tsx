import MUITableRow, { TableRowProps } from '@mui/material/TableRow';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<TableRowProps>;

export const TableRow: FC<Props> = ({ children, ...props }) => {
  return <MUITableRow {...props}>{children}</MUITableRow>;
};
