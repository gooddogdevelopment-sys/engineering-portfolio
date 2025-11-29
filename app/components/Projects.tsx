'use client';

import { Title, Text, Card, Group, Badge, SimpleGrid, Stack, Button, Image } from '@mantine/core';
import { allProjects } from '../data/projects';

export default function Projects() {
  const sortedProjects = [...allProjects].sort((a, b) => a.order - b.order);

  return (
    <Stack gap="xl" mb="xl">
      <Title order={2}>Projects</Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {sortedProjects.map((project) => (
          <Card key={project.id} shadow="sm" padding="0" radius="md" withBorder>
            <Card.Section>
              <Image
                src={project.image}
                alt={project.title}
                height={200}
                fit="cover"
              />
            </Card.Section>
            
            <Stack gap="sm" p="lg">
              <Group justify="space-between" align="flex-start">
                <Title order={3} size="h4">{project.title}</Title>
                <Badge variant="light" color={project.status === "In Progress" ? "blue" : "gray"}>
                  {project.status}
                </Badge>
              </Group>
              
              <Text size="sm" c="dimmed">{project.shortDescription}</Text>
              
              <Group gap="xs" mt="xs">
                {(project.tags || project.technologies || []).slice(0, 4).map((tech, i) => (
                  <Badge key={i} variant="filled" size="sm">{tech}</Badge>
                ))}
                {(project.tags || project.technologies || []).length > 4 && (
                  <Badge variant="outline" size="sm">
                    +{(project.tags || project.technologies || []).length - 4} more
                  </Badge>
                )}
              </Group>

              <Group gap="xs" mt="md">
                {project.githubUrl && (
                  <Button
                    component="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="light"
                    size="xs"
                  >
                    GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="light"
                    size="xs"
                  >
                    Live Demo
                  </Button>
                )}
              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
