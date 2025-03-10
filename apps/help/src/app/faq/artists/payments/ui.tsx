import { BackButton } from "@components/BackButton/BackButton";
import { Container, Text, Title } from "@rola/ui/components";
import React from "react";

function ArtistsPaymentPageUI() {
  return (
    <Container className="pb-20 pt-12">
      <BackButton />

      <Title order={3} underline className="mb-12">
        Pagos de Artistas
      </Title>
      <Text className="mb-3 text-sm italic">
        Última actualización: 03/03/2025
      </Text>
      <Title order={5} align="left" className="text-brand mb-3">
        ¿Cómo funcionan los pagos en ROLA?
      </Title>
      <Text className="mb-12">
        Este artículo explica cómo funcionan los pagos en ROLA, cuándo recibirás
        los fondos y qué retenciones pueden aplicarse.
      </Text>
      <Title order={5} align="left" className="text-brand mb-3">
        Configurar tu método de cobro
      </Title>
      <Text>Para recibir pagos en ROLA, sigue estos pasos:</Text>
      <ol>
        <li>Accede a tu perfil de artista</li>
        <li>
          Rellena la información de artista y datos financieros y fiscales.
        </li>
        <li>Configura tus suscripciones.</li>
      </ol>
      <Text className="mb-12">
        Una vez que completes estos pasos, revisaremos que todo esté correcto
        para activar tu artista.
      </Text>
      <Title order={5} align="left" className="text-brand mb-3">
        Cronología de pagos
      </Title>
      <Text className="mb-12">
        Lo pagos se realizan de manera trimestral. Una vez que inicies un cobro,
        los fondos suelen tardar entre 1 y 5 días hábiles en aparecer en tu
        cuenta. En algunos casos, puede haber verificaciones adicionales, lo que
        podría extender el tiempo de procesamiento hasta 10 días hábiles. Si
        detectamos actividad inusual en tu cuenta, podemos retener temporalmente
        los fondos por razones de seguridad. <br />
        El sistema de seguridad de Stripe (nuestro proveedor de cobros en línea)
        trabaja constantemente en mantener tu cuenta segura. Si se detecta una
        actividad inusual, se realiza un bloqueo y retención temporal de fondos
        para evitar que terceros accedan y retiren el salto total o parcial de
        tu cuenta. En este caso nos pondremos en contacto contigo para
        asegurarnos que todo marcha con normalidad y proceder al desbloqueo de
        la misma.
      </Text>
      <Title order={5} align="left" className="text-brand mb-3">
        Impuestos y comisiones por cobro
      </Title>
      <Text>
        Las retenciones aplicables al importe bruto de las suscripciones son las
        siguientes: <span className="text-red-700">*</span>
      </Text>
      <Container className="my-3 grid grid-cols-2">
        <div className="border-gray border-b px-3 py-2 font-semibold">IVA</div>
        <div className="border-gray border-b border-l px-3 py-2 font-semibold">
          Comisión de ROLA
        </div>
        <div className="px-3 py-2">
          21% <span className="text-red-700">**</span> <br />
        </div>
        <div className="border-gray border-l px-3 py-2">
          Hasta 15% de las suscripciones
        </div>
      </Container>

      <Container className="mb-12 italic">
        <Text className="mb-2 text-sm">Notas:</Text>
        <Text className="mb-1 text-sm">
          <span className="text-red-700">*</span> Por ahora los pagos solo están
          habilitados para España. Ten en cuenta que por normativa, todo ingreso
          debe ser declarado ante la Agencia Tributaria del país. Por lo que se
          hace de tu conocimiento que dicha entidad puede reclamar el porcentaje
          correspondiente de tus ingresos, en función de tu perfil fiscal (15%
          aproximadamente).
        </Text>
        <Text className="text-sm">
          <span className="text-red-700">**</span> Este valor es aplicado sobre
          el monto de la suscripción por lo que no afecta tu valor neto
        </Text>
      </Container>

      <Text>
        ¿Necesitas ayuda con un pago? Si tienes dudas sobre un cobro o necesitas
        asistencia, puedes escribirnos a{" "}
        <a
          href="mailto:soporte@rolamusic.app"
          className="text-brand hover:underline"
        >
          soporte@rolamusic.app
        </a>{" "}
        y nuestro equipo te ayudará lo antes posible.
      </Text>
    </Container>
  );
}

export { ArtistsPaymentPageUI };
