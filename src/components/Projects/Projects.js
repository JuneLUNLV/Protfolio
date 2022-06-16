import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const neonBorderColor = [
  {
    boxShadow: 'rgb(63 81 181 / 60%) 3px 3px 20px;',
    animation: "project1Box 2s ease infinite;",
    minHeight: "650px"
  },
  {
    boxShadow:'rgb(0 151 136 / 60%) 3px 3px 20px;',
    animation: "project2Box 2s ease infinite;",
    minHeight: "650px"
  },
  {
    boxShadow:'rgb(33 150 243 / 60%) 3px 3px 20px;',
    animation: "project3Box 2s ease infinite;",
    minHeight: "650px"
  },
  {
    boxShadow:'rgb(193 57 43 / 60%) 3px 3px 20px;',
    animation: "project4Box 2s ease infinite;",
    minHeight: "650px"
  }
]

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard style={neonBorderColor[i]} key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.id == 0 ?  
                <>
                  <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.visit}>Visit Landing Pge</ExternalLinks>
                  <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.visit2}>Visit App</ExternalLinks>    
                </>
              : 
                void(0)
              }
              {p.id == 1 ?  
                <>
                  <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.visit}>Visit Page</ExternalLinks>
                </>
              : 
                void(0)
              }
              {p.id == 2 ?  
                <>
                  <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.visit}>Visit Page</ExternalLinks>
                  <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.source}>View Source Code</ExternalLinks>
                </>
              : 
                void(0)
              }
              {p.id == 3 ?  
                <>
                  <ExternalLinks target="_blank" rel="noopener noreferrer" href={p.source}>View Source Code</ExternalLinks>
                </>
              : 
                void(0)
              }
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;