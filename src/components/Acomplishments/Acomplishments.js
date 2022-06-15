import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Udemy Courses Finished' },
  { number: 2, text: 'Paper Published', },
  { number: 10, text: 'Personal Projects', },
  { number: 5, text: 'Frontend Frameworks Leanred', }
];

const Acomplishments = () => (
  <Section className="acomplishmentsSection">
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number.toLocaleString('en-IN')}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
