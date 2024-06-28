import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  Text,
  Title,
  Underline,
} from "@rola/ui/components";
import { artistFaq, userFaq } from "./faq";

function FAQPage() {
  return (
    <Container className="pt-12 pb-24">
      <div className="pb-12">
        <Title order={3} className="uppercase">
          Preguntas Frecuentes
        </Title>
        <Underline />
      </div>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
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

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
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

export default FAQPage;
