import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  Underline,
} from "@rola/ui/components";
import { artistFaq, userFaq } from "./faq";

function FAQPage() {
  return (
    <Container className="pt-12 pb-24">
      <div className="pb-12">
        <h1 className="text-2xl text-center uppercase font-bold">
          Preguntas Frecuentes
        </h1>
        <Underline />
      </div>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Artistas
      </h2>
      <Accordion type="single" collapsible>
        {artistFaq.map(({ question, answer }) => (
          <AccordionItem value={question} key={question} className="mb-8">
            <AccordionTrigger className="font-semibold">
              <h3>{question}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="pb-4">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Usuarios
      </h2>
      <Accordion type="single" collapsible>
        {userFaq.map(({ question, answer }) => (
          <AccordionItem value={question} key={question} className="mb-8">
            <AccordionTrigger className="font-semibold">
              <h3>{question}</h3>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

export default FAQPage;
