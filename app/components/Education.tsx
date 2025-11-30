import { Title, Text, Stack, Group, Card } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Information Systems',
      minor: 'Minor in Sociology',
      school: 'Thomas More University',
      location: 'Crestview Hills, KY',
      period: '2019',
      description: '',
    },
    {
      degree: 'Graduate Coursework in Cyber Security',
      school: 'Wright State University',
      location: 'Dayton, OH',
      period: '',
      description: '',
    },
  ];

  return (
    <Stack gap="xl" mb="xl">
      <Group gap="sm">
        <IconSchool size={32} />
        <Title order={2} id="education-heading">
          Education
        </Title>
      </Group>
      <Stack gap="lg">
        {education.map((edu, index) => (
          <Card
            key={index}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            component="article"
            style={{
              backgroundColor: 'var(--mantine-color-gray-0)',
              borderColor: 'var(--mantine-color-gray-3)',
              borderLeft: '4px solid var(--mantine-color-cyan-5)',
            }}
          >
            <Stack gap="xs">
              <Title order={3} size="h4" fw={700}>
                {edu.degree}
              </Title>
              {edu.minor && (
                <Text size="sm" c="dimmed" fw={500}>
                  {edu.minor}
                </Text>
              )}
              <Text fw={600} c="cyan.7" size="md">
                {edu.school} - {edu.location}
              </Text>
              {edu.period && (
                <Text size="sm" c="dimmed" fw={500}>
                  <time>{edu.period}</time>
                </Text>
              )}
              {edu.description && <Text mt="xs">{edu.description}</Text>}
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
