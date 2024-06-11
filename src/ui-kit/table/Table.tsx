import { FC, PropsWithChildren } from 'react';
import MUITable from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

export const Table: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TableContainer component={Paper}>
      <MUITable>{children}</MUITable>
    </TableContainer>
  );
};
