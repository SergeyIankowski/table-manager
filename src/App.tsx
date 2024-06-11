import './App.css';
import { Table } from './ui-kit/table';
import { TableHead } from './ui-kit/table-head';
import { useReadData } from './api';
import { TableBody } from './ui-kit/table-body';
import { TableRow } from './ui-kit/table-row';
import { TableCell } from './ui-kit/table-cell';
import { Accordion } from './ui-kit/Accordion';
import { Button, Container, Divider, Stack } from '@mui/material';
import { TableData } from './types/IToolType';
import { useDeleteTool } from './api/use-delete-tool';

// const renderData = (data: TableData) => {
//   return Object.entries(data).map(([title, tools]) => {
//     return (
//       <Accordion key={title} title={title}>
//         <Table>
//           <TableHead names={['Номер', 'Инструмент', 'Управление']} />
//           <TableBody>
//             {tools.map(({ id, title }) => (
//               <TableRow key={id}>
//                 <TableCell>{id}</TableCell>
//                 <TableCell>{title}</TableCell>
//                 <TableCell>
//                   <Button variant="outlined">Удалить</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//             <TableRow>
//               <TableCell colSpan={3} align="center">
//                 <Button variant="outlined">Добавить инструмент</Button>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </Accordion>
//     );
//   });
// };

const App = () => {
  const { data, isLoading, isError } = useReadData();
  const { trigger } = useDeleteTool();

  if (isLoading) return <div>...Loading</div>;
  if (!data || isError) return <div>Something went wrong</div>;
  console.log(data);

  return (
    <Container maxWidth="xl">
      <Stack justifyContent="flex-start" divider={<Divider orientation="vertical" flexItem />}>
        {Object.entries(data).map(([title, tools]) => {
          return (
            <Accordion key={title} title={title}>
              <Table>
                <TableHead names={['Номер', 'Инструмент', 'Управление']} />
                <TableBody>
                  {tools.map(({ id, title, idGroup }) => (
                    <TableRow key={id}>
                      <TableCell>{id}</TableCell>
                      <TableCell>{title}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={async () => {
                            trigger({ id, idGroup });
                          }}
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      <Button variant="outlined">Добавить инструмент</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Accordion>
          );
        })}
      </Stack>
    </Container>
  );
};

export default App;
