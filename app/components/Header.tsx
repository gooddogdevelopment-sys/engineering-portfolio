'use client';

import { Group, Anchor, Container, Box } from '@mantine/core';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const links = [
    { label: 'About', id: 'intro' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
  ];

  return (
    <Box component="header" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Container size="lg" py="md">
        <Group justify="space-between">
          <Anchor
            onClick={() => scrollToSection('intro')}
            style={{ cursor: 'pointer', fontSize: '1.25rem', fontWeight: 700 }}
            underline="never"
          >
            Portfolio
          </Anchor>
          <Group gap="lg">
            {links.map((link) => (
              <Anchor
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{ cursor: 'pointer' }}
                underline="hover"
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
