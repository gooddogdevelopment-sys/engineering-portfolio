'use client';

import { useState, useEffect } from 'react';
import { Title, Text, Stack, Button, Group, Box } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload, IconPalette, IconCode, IconRocket, IconArrowRight } from '@tabler/icons-react';

export default function Intro() {
  const [showIcons, setShowIcons] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start icon animation immediately
    setShowIcons(true);
    
    // Show text after icons land (1.2s animation + 0.3s delay)
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    return () => clearTimeout(textTimer);
  }, []);

  const capabilities = [
    { icon: IconPalette, label: 'Design', color: 'pink', delay: 0 },
    { icon: IconCode, label: 'Develop', color: 'blue', delay: 0.2 },
    { icon: IconRocket, label: 'Deploy', color: 'green', delay: 0.4 },
  ];

  return (
    <Box 
      mb="xl" 
      pb="xl" 
      style={{ 
        borderBottom: '1px solid var(--mantine-color-gray-3)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Stack gap="xl" align="center" ta="center" maw={800}>
        <Stack gap="md">
          <Title 
            order={1} 
            size="3.5rem" 
            id="intro-heading"
            style={{ 
              lineHeight: 1.2,
              background: 'linear-gradient(45deg, var(--mantine-color-blue-6), var(--mantine-color-cyan-6))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Brandon Decker
          </Title>
          <Text size="1.75rem" fw={600} c="dimmed">
            Senior Software Engineer & Architect
          </Text>
        </Stack>

        <Text size="lg" c="dimmed" maw={600}>
          I'm a passionate developer with expertise in building modern web applications.
          I love creating elegant solutions to complex problems and continuously learning new technologies.
        </Text>

        {/* Animated Capabilities Section */}
        <Box mt="xl" mb="md">
          <Group gap={0} justify="center" align="center">
            {capabilities.map((capability, index) => (
              <Group key={capability.label} gap={0} align="center">
                <Stack 
                  gap="xs" 
                  align="center"
                  style={{
                    opacity: showIcons ? 1 : 0,
                    transform: showIcons ? 'translateY(0)' : 'translateY(-100px)',
                    transition: `all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${capability.delay}s`,
                  }}
                >
                  <Box
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, var(--mantine-color-${capability.color}-1), var(--mantine-color-${capability.color}-2))`,
                      border: `3px solid var(--mantine-color-${capability.color}-5)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    <capability.icon size={36} color={`var(--mantine-color-${capability.color}-7)`} />
                  </Box>
                  <Text
                    fw={600}
                    size="lg"
                    style={{
                      opacity: showText ? 1 : 0,
                      transform: showText ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.6s ease ${index * 0.15}s`,
                    }}
                  >
                    {capability.label}
                  </Text>
                </Stack>
                
                {/* Arrow between steps */}
                {index < capabilities.length - 1 && (
                  <Box
                    mx="lg"
                    style={{
                      opacity: showIcons ? 1 : 0,
                      transform: showIcons ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 1s ease ${capability.delay + 0.6}s`,
                    }}
                  >
                    <IconArrowRight size={32} color="var(--mantine-color-gray-5)" stroke={2.5} />
                  </Box>
                )}
              </Group>
            ))}
          </Group>
        </Box>

        <Group gap="md" mt="md">
          <Button 
            size="lg" 
            leftSection={<IconDownload size={20} />}
            variant="filled"
          >
            Download Resume
          </Button>
          <Button 
            size="lg" 
            variant="light"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </Group>

        <Group gap="lg" mt="lg">
          <Button
            component="a"
            href="mailto:your.email@example.com"
            variant="subtle"
            leftSection={<IconMail size={20} />}
            size="md"
          >
            Email
          </Button>
          <Button
            component="a"
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            leftSection={<IconBrandLinkedin size={20} />}
            size="md"
          >
            LinkedIn
          </Button>
          <Button
            component="a"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            leftSection={<IconBrandGithub size={20} />}
            size="md"
          >
            GitHub
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
