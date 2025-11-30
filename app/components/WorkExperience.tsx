import { Title, Text, Stack, Box, Group, Badge } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { workHistory } from '../data/workExperience';

export default function WorkExperience() {
  return (
    <Stack gap="xl" mb="xl" pb="xl" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Group gap="sm">
        <IconBriefcase size={32} />
        <Title order={2} id="experience-heading">Work Experience</Title>
      </Group>
      <Stack gap="xl">
        {workHistory.map((exp) => (
          <Box key={exp.id} style={{ borderLeft: '2px solid var(--mantine-color-gray-4)', paddingLeft: '1rem' }} component="article">
            <Title order={3} size="h3" fw={700} mb="xs">{exp.title}</Title>
            <Group justify="space-between" align="center" mb="sm">
              <Text fw={600} c="blue.7" size="md">
                @ {exp.company}
              </Text>
              <Text size="sm" c="dimmed" fw={500}>
                <time>{exp.duration}</time>
              </Text>
            </Group>
            <Text mb="sm">{exp.description}</Text>
            
            <Group gap="xs" mb="sm" role="list" aria-label="Technologies used">
              {exp.technologies.map((tech, i) => (
                <Badge key={i} variant="light" size="sm" role="listitem">{tech}</Badge>
              ))}
            </Group>

            {exp.achievements.length > 0 && (
              <>
                <Text size="sm" fw={600} mb="xs">Key Achievements:</Text>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>
                      <Text size="sm">{achievement}</Text>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
