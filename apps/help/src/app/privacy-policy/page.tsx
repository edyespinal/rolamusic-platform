import { Container, Text, Title, Underline } from "@rola/ui/components";

function PrivacyPolicyPage() {
  return (
    <Container className="pt-12 pb-24">
      <div className="pb-12">
        <Title order={3} className="uppercase">
          Política de Privacidad
        </Title>
        <Underline />
      </div>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        ¿Quién es el Responsable del tratamiento de sus datos?
      </Title>
      <div className="mb-12">
        <Text>Razón social: ROLA - Cristhian Pagoaga Aguilera</Text>
        <Text>CIF-DNI: 55113758P</Text>
        <Text>
          Dirección: C/Cuesta de San Francisco 10, 28231 Las Rozas, Madrid
        </Text>
        <Text>Teléfono: 911 933 480</Text>
        <Text>
          Email:{" "}
          <a href="mailto:hola@rola.es" className="hover:text-brand">
            hola@rola.es
          </a>
        </Text>
      </div>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        ¿Con qué finalidad tratamos sus datos personales?
      </Title>
      <Text className="mb-12">
        En ROLA tratamos la información recibida en el formulario de inscripción
        con la finalidad de gestionar las solicitudes recibidas a través de la
        web. En aquellos casos en los que haya marcado la correspondiente
        casilla, también podremos enviar actualizaciones sobre productos,
        promociones, ofertas especiales, noticias y eventos por diferentes
        medios, incluido el correo electrónico.
      </Text>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        ¿Por cuánto tiempo conservaremos sus datos?
      </Title>
      <Text className="mb-12">
        Los datos del formulario de inscripción serán conservados hasta la
        resolución de la relación con el interesado. Los datos para el envío de
        comunicaciones comerciales serán conservados hasta que el interesado
        solicite la baja.
      </Text>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        ¿Cuál es la legitimación para el tratamiento de sus datos?
      </Title>
      <Text className="mb-12">
        El consentimiento del interesado al cumplimentar el formulario de
        inscripción. El envío de comunicaciones comerciales está basado en el
        consentimiento del interesado al marcar la casilla de aceptación.
      </Text>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        ¿A qué destinatarios se comunicarán sus datos?
      </Title>
      <Text className="mb-12">
        No se comunicarán datos, salvo obligación legal.
      </Text>
      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        ¿Cuáles son sus derechos cuando nos facilita sus datos?
      </Title>
      <Text className="mb-12">
        Cualquier persona tiene derecho a obtener confirmación sobre si en ROLA
        estamos tratando datos personales que les conciernan o no. Las personas
        interesadas tienen derecho a si acceder a sus datos personales, así como
        a solicitar la rectificación de los datos inexactos o, en su caso,
        solicitar su supresión cuando, entre otros motivos, los datos ya no sean
        necesarios para los fines que fueron recogidos. En determinadas
        circunstancias, los interesados podrán solicitar la limitación del
        tratamiento de sus datos, en cuyo caso únicamente los conservaremos para
        el ejercicio o la defensa de reclamaciones. En determinadas
        circunstancias y por motivos relacionados con su situación particular,
        los interesados podrán oponerse al tratamiento de sus datos. ROLA dejará
        de tratar los datos, salvo por motivos legítimos imperiosos o el
        ejercicio o la defensa de posibles reclamaciones. El interesado tiene
        derecho a presentar una reclamación ante la Autoridad de control (
        <a href="agdp.es" target="_blank" rel="noreferrer">
          {" "}
          agpd.es
        </a>
        ) si considera que el tratamiento no se ajusta a la normativa vigente.
        Datos de contacto para ejercer sus derechos: ROLA, C/Cuesta de San
        Francisco 10, 28231 Las Rozas, Madrid o a través de correo electrónico a{" "}
        <a href="mailto:hola@rola.es">hola@rola.es</a>, junto con prueba válida
        en derecho, como fotocopia del D.N.I. e indicando en el asunto
        “PROTECCIÓN DE DATOS”.
      </Text>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        ¿Cómo hemos obtenido sus datos?
      </Title>
      <Text className="mb-12">
        Los datos personales que tratamos en ROLA han sido facilitados por el
        propio interesado. El interesado que envía la información a ROLA
        garantiza y responde, en cualquier caso, de la exactitud, vigencia y
        autenticidad de los datos personales facilitados y se comprometen a
        mantenerlos debidamente actualizados, exonerándose la EMPRESA de
        cualquier responsabilidad al respecto. El usuario acepta proporcionar
        información completa y correcta en los formularios de registro.
        Asimismo, ROLA no responde de la veracidad de las informaciones que no
        sean de elaboración propia y de las que se indique otra fuente, por lo
        que tampoco asume responsabilidad alguna en cuanto a hipotéticos
        perjuicios que pudieran originarse por el uso de dicha información.
      </Text>

      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        Uso común con redes sociales
      </Title>
      <Text className="mb-12">
        Si el afectado opta por acceder a los Servicios a través de su cuenta en
        las redes sociales (es decir, Facebook, Twitter, YouTube o LinkedIn) o
        hace clic en uno de los botones de conexión o vínculos de las redes
        sociales (por ejemplo, el botón “Me gusta” de Facebook) que están
        disponibles en los Servicios, su contenido y su información personal
        serán compartidos con las correspondientes redes sociales. El afectado
        es consciente de, y acepta, que el uso de su información personal,
        incluida la información que comparta con las redes sociales a través de
        los Servicios, por parte de las redes sociales, se rige por sus
        respectivas políticas de privacidad. Si no desea que las redes sociales
        recopilen su información, examine la política de privacidad de la
        correspondiente red social y/o desconéctese de la misma antes de
        utilizar nuestros Servicios.
      </Text>
      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        Menores
      </Title>
      <Text className="mb-12">
        Los menores de 18 años no podrán hacer uso del formulario de
        inscripción.
      </Text>
      <Title order={4} align="left" className="uppercase pb-4 text-brand">
        Cambios en la Política de Privacidad
      </Title>
      <Text className="mb-12">
        ROLA se reserva el derecho a modificar la presente política para
        adaptarla a novedades legislativas o jurisprudenciales. En dichos
        supuestos ROLA anunciará en esta página los cambios introducidos con
        razonable antelación a su puesta en práctica.
      </Text>
    </Container>
  );
}

export default PrivacyPolicyPage;
