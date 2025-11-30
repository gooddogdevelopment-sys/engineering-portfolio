import { Title, Text, Stack, Group, Badge, Card } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { workHistory } from '../data/workExperience';

export default function WorkExperience() {
  return (
    <Stack
      gap="xl"
      mb="xl"
      pb="xl"
      style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}
    >
      <Group gap="sm">
        <IconBriefcase size={32} />
        <Title order={2} id="experience-heading">
          Work Experience
        </Title>
      </Group>
      <Stack gap="lg">
        {workHistory.map((exp) => (
          <Card
            key={exp.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            component="article"
            style={{
              backgroundColor: 'var(--mantine-color-gray-0)',
              borderColor: 'var(--mantine-color-gray-3)',
              borderLeft: '4px solid var(--mantine-color-blue-5)',
            }}
          >
            <Stack gap="sm">
              <Title order={3} size="h3" fw={700}>
                {exp.title}
              </Title>
              <Group justify="space-between" align="center">
                <Text fw={600} c="blue.7" size="md">
                  @ {exp.company}
                </Text>
                <Text size="sm" c="dimmed" fw={500}>
                  <time>{exp.duration}</time>
                </Text>
              </Group>
              <Text>{exp.description}</Text>

              <Group gap="xs" role="list" aria-label="Technologies used">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="light" size="sm" role="listitem">
                    {tech}
                  </Badge>
                ))}
              </Group>

              {exp.achievements.length > 0 && (
                <>
                  <Text size="sm" fw={600} mt="xs">
                    Key Achievements:
                  </Text>
                  <ul style={{ marginTop: '0.25rem', paddingLeft: '1.5rem', marginBottom: 0 }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} style={{ marginBottom: '0.25rem' }}>
                        <Text size="sm">{achievement}</Text>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
