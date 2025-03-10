import React from "react";
import Link from "next/link";
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Text,
  Title,
  Underline,
} from "@rola/ui/components";
import { ArrowRightIcon } from "@rola/ui/icons";
import { BackButton } from "@components/BackButton/BackButton";
import { FAQ } from "./faq";

function FAQPageUI({ type, FAQs }: { type: "artists" | "users"; FAQs: FAQ[] }) {
  return (
    <Container className="pb-24 pt-12">
      <BackButton />

      <div className="pb-6">
        <Title order={3} className="uppercase">
          Preguntas Frecuentes
        </Title>
        <Underline />
      </div>

      <Title order={4} className="text-brand pb-4 uppercase">
        {type === "artists" ? "Artistas" : "Usuarios"}
      </Title>
      <Accordion type="single" collapsible>
        {FAQs.map(({ question, answer, link }) => (
          <AccordionItem value={question} key={question} className="mb-8">
            <AccordionTrigger className="font-semibold">
              <Text className="font-semibold">{question}</Text>
            </AccordionTrigger>
            <AccordionContent>
              {link ? (
                <Link href={link}>
                  <Text className="hover:text-brand flex items-center gap-2 pb-4">
                    {answer} <ArrowRightIcon className="text-brand" />
                  </Text>
                </Link>
              ) : (
                <Text className="pb-4">{answer}</Text>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

export { FAQPageUI };
