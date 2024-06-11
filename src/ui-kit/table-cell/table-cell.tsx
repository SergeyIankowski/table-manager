import { FC, PropsWithChildren } from 'react';
import MUITableCell, { TableCellProps } from '@mui/material/TableCell';

type Props = PropsWithChildren<TableCellProps>;

export const TableCell: FC<Props> = ({ children, ...props }) => {
  return <MUITableCell {...props}>{children}</MUITableCell>;
};
