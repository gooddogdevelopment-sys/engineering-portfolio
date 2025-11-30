import { Title, Text, Stack, Box, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2016 - 2020",
      description: "Focused on software engineering and web development.",
    },
  ];

  return (
    <Stack gap="xl" mb="xl">
      <Group gap="sm">
        <IconSchool size={32} />
        <Title order={2} id="education-heading">Education</Title>
      </Group>
      <Stack gap="lg">
        {education.map((edu, index) => (
          <Box key={index} style={{ borderLeft: '2px solid var(--mantine-color-gray-4)', paddingLeft: '1rem' }} component="article">
            <Title order={3} size="h4">{edu.degree}</Title>
            <Text c="dimmed">{edu.school}</Text>
            <Text size="sm" c="dimmed" mb="xs">
              <time>{edu.period}</time>
            </Text>
            <Text>{edu.description}</Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
