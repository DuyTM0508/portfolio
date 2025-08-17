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

import { Tailwind } from "@react-email/tailwind";

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
      <Preview>New contact form message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-gray-900 font-sans">
          <Container className="mx-auto my-10 max-w-lg rounded-lg border border-gray-200 bg-white shadow-md">
            {/* Header */}
            <Section className="bg-indigo-600 px-6 py-4 rounded-t-lg">
              <Heading className="text-xl font-semibold text-white m-0">
                📬 New Message Received
              </Heading>
            </Section>

            {/* Content */}
            <Section className="px-6 py-6">
              <Text className="text-gray-700 text-base leading-relaxed">
                You’ve received a new message from your portfolio site:
              </Text>

              <div className="mt-4 border-t border-gray-200 pt-4">
                <Text className="text-sm font-semibold text-gray-500">From</Text>
                <Text className="text-base text-gray-800">{email}</Text>
              </div>

              <div className="mt-4 border-t border-gray-200 pt-4">
                <Text className="text-sm font-semibold text-gray-500">Message</Text>
                <Text className="text-base text-gray-800 whitespace-pre-line">
                  {description}
                </Text>
              </div>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-50 px-6 py-4 rounded-b-lg">
              <Text className="text-xs text-gray-500 text-center">
                This email was generated automatically from your portfolio contact form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
