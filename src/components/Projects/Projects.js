import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
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
                  <ExternalLinks href={p.visit1}>Visit Landing Pge</ExternalLinks>
                  <ExternalLinks href={p.visit12}>Visit App</ExternalLinks>    
                </>
              : 
                void(0)
              }
              {p.id == 1 ?  
                <>
                  <ExternalLinks href={p.visit}>Visit Page</ExternalLinks>
                </>
              : 
                void(0)
              }
              {p.id == 2 ?  
                <>
                  <ExternalLinks href={p.visit}>Visit Page</ExternalLinks>
                  <ExternalLinks href={p.source}>View Source Code</ExternalLinks>
                </>
              : 
                void(0)
              }
              {p.id == 3 ?  
                <>
                  <ExternalLinks href={p.source}>View Source Code</ExternalLinks>
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