'use client';

import { Group, Anchor, Container, Box, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  const links = [
    { label: 'About', id: 'intro' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
  ];

  const socialLinks = [
    { icon: IconMail, href: 'mailto:your.email@example.com', label: 'Email' },
    { icon: IconBrandLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: IconBrandGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  ];

  return (
    <Box component="header" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Container size="lg" py="md">
        <Group justify="space-between">
          <Group gap="lg" component="nav" aria-label="Main navigation">
            {links.map((link) => (
              <Anchor
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                onKeyDown={(e) => handleKeyDown(e, link.id)}
                style={{ cursor: 'pointer' }}
                underline="hover"
                tabIndex={0}
                role="button"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
          
          <Group gap="sm">
            {socialLinks.map((social) => (
              <ActionIcon
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                color="gray"
                size="lg"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </ActionIcon>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
