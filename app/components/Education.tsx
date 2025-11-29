import { Title, Text, Stack, Box } from '@mantine/core';

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
      <Title order={2}>Education</Title>
      <Stack gap="lg">
        {education.map((edu, index) => (
          <Box key={index} style={{ borderLeft: '2px solid var(--mantine-color-gray-4)', paddingLeft: '1rem' }}>
            <Title order={3} size="h4">{edu.degree}</Title>
            <Text c="dimmed">{edu.school}</Text>
            <Text size="sm" c="dimmed" mb="xs">{edu.period}</Text>
            <Text>{edu.description}</Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
