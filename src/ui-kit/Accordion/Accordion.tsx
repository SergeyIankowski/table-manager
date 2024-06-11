import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MUIAccordion from '@mui/material/Accordion';
import MUIAccordionSummary from '@mui/material/AccordionSummary';
import MUIAccordionDetails from '@mui/material/AccordionDetails';
import { FC, PropsWithChildren } from 'react';

type Props = {
  title: string;
};

export const Accordion: FC<PropsWithChildren<Props>> = ({ title, children, ...props }) => {
  return (
    <MUIAccordion {...props}>
      <MUIAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </MUIAccordionSummary>
      <MUIAccordionDetails>{children}</MUIAccordionDetails>
    </MUIAccordion>
  );
};
