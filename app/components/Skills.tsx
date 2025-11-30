import { Title, Text, Group, Badge, SimpleGrid, Stack, Card } from '@mantine/core';
import { IconCode } from '@tabler/icons-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
      experience: "3 years of experience",
      description: "The core technologies I use for modern web interfaces & user experiences.",
      skills: ["TypeScript", "Vue.js", "Next.js", "Tailwind CSS", "React"],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      experience: "7 years of experience",
      description: "Scalable APIs & server-side solutions",
      skills: ["C#", ".NET", "SQL Server", "PostgreSQL", "RabbitMQ"],
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      experience: "3 years of experience",
      description: "Deployment, monitoring & automation",
      skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD"],
    },
  ];

  return (
    <Stack gap="xl" mb="xl" pb="xl" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Group gap="sm">
        <IconCode size={32} />
        <Title order={2} id="skills-heading">Skills</Title>
      </Group>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {skillCategories.map((cat, index) => (
          <Card 
            key={index} 
            shadow="sm" 
            padding="lg" 
            radius="md" 
            withBorder
            style={{
              backgroundColor: 'var(--mantine-color-gray-0)',
              borderColor: 'var(--mantine-color-gray-3)',
            }}
          >
            <Stack gap="md">
              <Group gap="sm">
                <Text size="2rem">{cat.icon}</Text>
                <Title order={3} size="h4">{cat.category}</Title>
              </Group>
              
              <Text size="sm" c="dimmed">{cat.experience}</Text>
              
              <Text size="sm">{cat.description}</Text>
              
              <Group gap="xs" role="list" aria-label={`${cat.category} skills`}>
                {cat.skills.map((skill, i) => (
                  <Badge key={i} variant="light" size="md" role="listitem">{skill}</Badge>
                ))}
              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
