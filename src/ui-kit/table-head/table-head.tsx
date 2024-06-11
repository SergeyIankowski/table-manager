import { FC } from 'react';
import MUITableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

type Props = {
  names: string[];
};

export const TableHead: FC<Props> = ({ names }) => {
  return (
    <MUITableHead>
      <TableRow>
        {names.map((name) => (
          <TableCell key={name}>{name}</TableCell>
        ))}
      </TableRow>
    </MUITableHead>
  );
};
