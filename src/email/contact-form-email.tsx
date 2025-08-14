import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  email: string;
  description: string;
}

export default function ContactFormEmail({
  email,
  description,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your porfolio site</Preview>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              You received the following message from the contact form
            </Heading>
            <Text>Email: {email}</Text>
            <Text>Description: {description}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
