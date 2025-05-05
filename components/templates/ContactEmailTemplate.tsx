// components/ContactEmailTemplate.jsx
import { Html, Head, Body, Container, Section, Heading, Text } from '@react-email/components';
import type { CSSProperties } from 'react';

interface ContactEmailTemplateProps {
    name: string;
    email: string;
    message: string;
    phone?: string;
}

export default function ContactEmailTemplate({ name, email, message, phone }: ContactEmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Body style={body}>
                <Container style={container}>
                    <Section style={header}>
                        <Heading style={h1}>New Contact Submission 🌟</Heading>
                    </Section>

                    <Section style={content}>
                        <div style={grid}>
                            <div style={column}>
                                <Text style={label}>Name</Text>
                                <Text style={value}>{name}</Text>
                            </div>
                            <div style={column}>
                                <Text style={label}>Contact</Text>
                                <Text style={value}>{phone || 'Not provided'}</Text>
                            </div>
                        </div>

                        <div style={divider} />

                        <Text style={label}>Email</Text>
                        <Text style={{ ...value, color: '#7dd3fc' }}>{email}</Text>

                        <div style={divider} />

                        <Text style={label}>Message</Text>
                        <Text style={messageStyle}>{message}</Text>
                    </Section>

                    <Section style={footer}>
                        <Text style={footerText}>
                            Sent via portfolio contact form • {new Date().toLocaleDateString()}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const body = {
    backgroundColor: '#09090b',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    margin: 0,
    padding: '20px 0',
};

const container = {
    backgroundColor: '#18181b',
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0',
    overflow: 'hidden',
    border: '1px solid #27272a',
};

const header = {
    backgroundColor: '#0f172a',
    padding: '28px 24px',
    borderBottom: '1px solid #1e293b',
};

const h1 = {
    fontSize: '20px',
    fontWeight: '600',
    margin: '0',
    color: '#e2e8f0',
    letterSpacing: '-0.25px',
};

const content = {
    padding: '32px 24px',
};

const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginBottom: '32px',
};

const column = {
    padding: '0',
};

const label: CSSProperties = {
    fontSize: '13px',
    color: '#71717a',
    fontWeight: '500',
    marginBottom: '6px',
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
};

const value = {
    fontSize: '16px',
    color: '#f4f4f5',
    margin: '0',
    lineHeight: '1.5',
};

const messageStyle = {
    ...value,
    backgroundColor: '#27272a',
    padding: '18px',
    borderRadius: '8px',
    border: '1px solid #3f3f46',
    whiteSpace: 'pre-wrap',
    marginTop: '12px',
    lineHeight: '1.6',
};

const divider = {
    height: '1px',
    backgroundColor: '#27272a',
    margin: '24px 0',
};

const footer: CSSProperties = {
    borderTop: '1px solid #27272a',
    padding: '20px 24px',
    textAlign: 'center',
};

const footerText = {
    fontSize: '12px',
    color: '#71717a',
    margin: '0',
};