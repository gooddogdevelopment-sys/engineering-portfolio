import { Title, Text, Stack, Box, Group, Badge } from '@mantine/core';
import { workHistory } from '../data/workExperience';

export default function WorkExperience() {
  return (
    <Stack gap="xl" mb="xl">
      <Title order={2}>Work Experience</Title>
      <Stack gap="xl">
        {workHistory.map((exp) => (
          <Box key={exp.id} style={{ borderLeft: '2px solid var(--mantine-color-gray-4)', paddingLeft: '1rem' }}>
            <Title order={3} size="h4">{exp.title}</Title>
            <Text c="dimmed" fw={500}>{exp.company}</Text>
            <Text size="sm" c="dimmed" mb="sm">{exp.duration}</Text>
            <Text mb="sm">{exp.description}</Text>
            
            <Group gap="xs" mb="sm">
              {exp.technologies.map((tech, i) => (
                <Badge key={i} variant="light" size="sm">{tech}</Badge>
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
