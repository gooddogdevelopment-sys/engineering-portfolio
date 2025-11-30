'use client';

import { Title, Text, Card, Group, Badge, SimpleGrid, Stack, Button, Image } from '@mantine/core';
import { IconFolder } from '@tabler/icons-react';
import { allProjects } from '../data/projects';

export default function Projects() {
  const sortedProjects = [...allProjects].sort((a, b) => a.order - b.order);

  return (
    <Stack
      gap="xl"
      mb="xl"
      pb="xl"
      style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}
    >
      <Group gap="sm">
        <IconFolder size={32} />
        <Title order={2} id="projects-heading">
          Projects
        </Title>
      </Group>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {sortedProjects.map((project) => (
          <Card
            key={project.id}
            shadow="sm"
            padding="0"
            radius="md"
            withBorder
            component="article"
            style={{
              backgroundColor: 'var(--mantine-color-gray-0)',
              borderColor: 'var(--mantine-color-gray-3)',
            }}
          >
            <Card.Section>
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                height={200}
                fit="cover"
              />
            </Card.Section>

            <Stack gap="sm" p="lg">
              <Group justify="space-between" align="flex-start">
                <Title order={3} size="h4">
                  {project.title}
                </Title>
                <Badge
                  variant="light"
                  color={project.status === 'In Progress' ? 'blue' : 'gray'}
                  aria-label={`Project status: ${project.status}`}
                >
                  {project.status}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {project.shortDescription}
              </Text>

              <Group gap="xs" mt="xs" role="list" aria-label="Technologies used">
                {(project.tags || project.technologies || []).slice(0, 4).map((tech, i) => (
                  <Badge key={i} variant="filled" size="sm" role="listitem">
                    {tech}
                  </Badge>
                ))}
                {(project.tags || project.technologies || []).length > 4 && (
                  <Badge variant="outline" size="sm" role="listitem">
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
                    aria-label={`View ${project.title} on GitHub`}
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
                    aria-label={`View live demo of ${project.title}`}
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
