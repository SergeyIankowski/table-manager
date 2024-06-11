import MUITableBody, { TableBodyProps } from '@mui/material/TableBody';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<TableBodyProps>;

export const TableBody: FC<Props> = ({ children, ...props }) => {
  return <MUITableBody {...props}>{children}</MUITableBody>;
};
