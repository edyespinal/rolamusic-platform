import React from "react";
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Text,
  Title,
  Underline,
  Button,
  Icon,
} from "@rola/ui/components";
import { artistFaq, userFaq } from "./faq";
import Link from "next/link";
import { BackButton } from "@components/BackButton/BackButton";

function FAQPageUI() {
  return (
    <Container className="pb-24 pt-12">
      <BackButton />

      <div className="pb-12">
        <Title order={3} className="uppercase">
          Preguntas Frecuentes
        </Title>
        <Underline />
      </div>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Artistas
      </Title>
      <Accordion type="single" collapsible>
        {artistFaq.map(({ question, answer }) => (
          <AccordionItem value={question} key={question} className="mb-8">
            <AccordionTrigger className="font-semibold">
              <Text className="font-semibold">{question}</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text className="pb-4">{answer}</Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Usuarios
      </Title>
      <Accordion type="single" collapsible>
        {userFaq.map(({ question, answer }) => (
          <AccordionItem value={question} key={question} className="mb-8">
            <AccordionTrigger className="font-semibold">
              <Text className="font-semibold">{question}</Text>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <Text className="pb-4">{answer}</Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

export { FAQPageUI };
