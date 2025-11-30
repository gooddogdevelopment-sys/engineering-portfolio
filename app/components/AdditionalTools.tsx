import { Title, Group, Badge, Stack } from '@mantine/core';
import { IconTools } from '@tabler/icons-react';

export default function AdditionalTools() {
  const tools = [
    "Visual Studio",
    "JetBrains Rider",
    "Visual Studio Code",
    "Microsoft SQL Server Management Studio",
    "GitHub",
    "GitLab",
    "Postman",
    "Jira",
    "Confluence",
  ];

  return (
    <Stack gap="md" mb="xl" pb="xl" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Group gap="sm" justify="center">
        <IconTools size={32} />
        <Title order={2} id="tools-heading">
          Additional Technologies & Tools
        </Title>
      </Group>
      <Group gap="md" justify="center">
        {tools.map((tool, i) => (
          <Badge key={i} variant="outline" size="lg" color="blue">
            {tool}
          </Badge>
        ))}
      </Group>
    </Stack>
  );
}
