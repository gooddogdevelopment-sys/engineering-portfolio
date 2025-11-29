import { Title, Text, Stack } from '@mantine/core';

export default function Intro() {
  return (
    <Stack gap="md" mb="xl">
      <Title order={1} size="h1">
        Hi, I'm [Your Name]
      </Title>
      <Text size="xl" c="dimmed">
        Full Stack Developer
      </Text>
      <Text size="lg">
        I'm a passionate developer with expertise in building modern web applications.
        I love creating elegant solutions to complex problems and continuously learning new technologies.
      </Text>
    </Stack>
  );
}
