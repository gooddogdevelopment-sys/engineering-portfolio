import { Container, Stack, Box } from '@mantine/core';
import Header from "./components/Header";
import Intro from "./components/Intro";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
      <Header />
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Box id="intro">
            <Intro />
          </Box>
          <Box id="experience">
            <WorkExperience />
          </Box>
          <Box id="projects">
            <Projects />
          </Box>
          <Box id="skills">
            <Skills />
          </Box>
          <Box id="education">
            <Education />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
