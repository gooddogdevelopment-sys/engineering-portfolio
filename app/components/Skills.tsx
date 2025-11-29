import { Title, Text, Group, Badge, SimpleGrid, Stack } from '@mantine/core';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
    },
  ];

  return (
    <Stack gap="xl" mb="xl">
      <Title order={2}>Skills</Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {skillCategories.map((cat, index) => (
          <Stack key={index} gap="sm">
            <Text fw={600} size="lg">{cat.category}</Text>
            <Group gap="xs">
              {cat.skills.map((skill, i) => (
                <Badge key={i} variant="filled" size="lg">{skill}</Badge>
              ))}
            </Group>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
