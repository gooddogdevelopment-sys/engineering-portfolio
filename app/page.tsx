import { Container, Stack, Box } from '@mantine/core';
import Header from "./components/Header";
import Intro from "./components/Intro";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AdditionalTools from "./components/AdditionalTools";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
      <Header />
      <Container size="lg" py="xl" component="main">
        <Stack gap="xl">
          <Box id="intro" component="section" aria-labelledby="intro-heading">
            <Intro />
          </Box>
          <Box id="experience" component="section" aria-labelledby="experience-heading">
            <WorkExperience />
          </Box>
          <Box id="skills" component="section" aria-labelledby="skills-heading">
            <Skills />
          </Box>
          <Box component="section" aria-labelledby="tools-heading">
            <AdditionalTools />
          </Box>
          <Box id="projects" component="section" aria-labelledby="projects-heading">
            <Projects />
          </Box>
          <Box id="education" component="section" aria-labelledby="education-heading">
            <Education />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
