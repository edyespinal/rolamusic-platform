import React from "react";
import { Container, Text, Title, Underline } from "@rola/ui/components";
import { BackButton } from "@components/BackButton/BackButton";

function LegalNoticePageUI() {
  return (
    <Container className="pb-24 pt-12">
      <BackButton />

      <div className="pb-12">
        <Title order={3} className="uppercase">
          Condiciones de Uso
        </Title>
        <Underline />
      </div>

      <Text className="mb-12">
        En cumplimiento de lo previsto en la Ley Orgánica 34/2002, de 11 de
        julio, de Servicios de la Sociedad de la Información y Comercio
        Electrónico LSSICE, ROLA informa al usuario que dicha empresa es la
        titular de este sitio web, localizado en la URL
        http://www.rolamusic.app., sitio con que ROLA presta sus servicios en
        internet. Los datos identificativos de ROLA se especifican a
        continuación. El presente Aviso Legal tiene como objeto establecer las
        Condiciones Generales que regulan el acceso y uso de este sitio web.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Datos indentificativos
      </Title>
      <div className="mb-12">
        <Text>
          Domicilio: C/Cuesta de San Francisco 10, Las Rozas, Madrid - 28231
        </Text>
        <Text>Teléfono: 911 933 480</Text>
        <Text>
          Correo electrónico: <a href="mailto:hola@rola.es">hola@rola.es</a>
        </Text>
        <Text>Datos fiscales: CIF-DNI 55113758P</Text>
      </div>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Aceptación del usuario
      </Title>
      <Text className="mb-12">
        El acceso y/o uso de este sitio web atribuye la condición de usuario e
        implica necesariamente la sumisión y aceptación de las Condiciones
        Generales incluidas en este Aviso Legal, sin reservas, en toda su
        extensión. En caso de no estar de acuerdo con cualquiera de las
        condiciones aquí establecidas, el usuario no deberá usar este sitio web.
        Para acceder a esta página web es necesario ser mayor de edad según la
        legislación española (18 años) y disponer de la capacidad legal
        necesaria para vincularse por este acuerdo y para utilizar este sitio
        web de conformidad con las Condiciones Generales aquí enunciadas, las
        cuales comprende y entiende en su totalidad. Si el usuario no es mayor
        de edad o carece de la capacidad necesaria para obligarse, el titular de
        este sitio web declina toda responsabilidad derivada del incumplimiento
        de esta condición. La declaración de cualquiera de estas Condiciones
        Generales como nula, inválida o ineficaz no afectará a la validez o
        eficacia de las restantes, que seguirán siendo vinculantes entre las
        partes. La renuncia por cualquiera de las partes a exigir en un momento
        determinado el cumplimiento de una cualquiera de las Condiciones
        Generales aquí estipuladas no implicará una renuncia con carácter
        general al cumplimiento de otra condición o condiciones, ni creará un
        derecho adquirido para la otra parte. El usuario queda informado y
        acepta que el acceso a la presente web no supone, en modo alguno, el
        inicio de una relación comercial con ROLA.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Utilización del sitio web (1): generalidades
      </Title>
      <Text className="mb-12">
        El usuario asume la responsabilidad del uso del presente sitio web y se
        compromete a la realización de un correcto uso del mismo y de los
        contenidos y servicios ofrecidos en él. A tales efectos, y con carácter
        enunciativo pero no limitativo, el usuario se abstendrá de: Utilizar el
        sitio web y/o sus contenidos con fines o efectos ilícitos, ilegales; con
        fines contrarios a los establecidos en las presentes Condiciones
        Generales, a la buena fe y al orden público, con fines lesivos de los
        derechos e intereses de terceros; con fines que de cualquier forma
        puedan dañar, inutilizar o sobrecargar el sitio web o impedir la normal
        utilización o disfrute del sitio web. Acceder o intentar acceder a
        recursos o áreas restringidas del sitio web sin cumplir las condiciones
        exigidas para dicho acceso. Acceder o intentar acceder a los sistemas
        físicos o lógicos de ROLA, de sus proveedores o de terceros. Suprimir,
        ocultar o manipular las notas sobre derechos de propiedad intelectual o
        industrial y demás datos identificativos de los derechos de ROLA o de
        terceros incorporados a sus contenidos, huellas digitales, dispositivos
        técnicos de protección o cualesquiera mecanismos de información que
        puedan insertarse en los contenidos, establecidos para su
        reconocimiento. Realizar actuación alguna que pudiera ocasionar la
        introducción, transmisión, incorporación o difusión de virus u otros
        elementos físicos o electrónicos que pudieran producir daño o
        impedimento en el normal funcionamiento del sitio web, de sus
        contenidos, de la red, de los documentos electrónicos y archivos
        almacenados en los equipos informáticos de ROLA o de cualquier usuario
        de Internet. Está expresamente prohibida la introducción, transmisión,
        incorporación o difusión de cualquier contenido ilícito, amenazador,
        calumnioso, difamatorio, obsceno, escandaloso, pornográfico o blasfemo,
        o cualquier materia que pudiera constituir o inducir a conductas que
        podrían tipificarse como delito, ocasionar responsabilidad civil, o
        vulnerar cualquier ley. Conforme a lo establecido anteriormente, ROLA no
        se hará responsable, en supuesto alguno, por cualquier clase de daño que
        pudiera ser ocasionado a los usuarios del sitio web http://www.rola.es
        por las actuaciones contraproducentes que se pudieran producir,
        descritas en los párrafos anteriores. El usuario responderá de los daños
        y perjuicios que ROLA pueda sufrir como consecuencia del incumplimiento
        de cualquiera de las obligaciones a las que queda sometido por las
        presentes Condiciones Generales.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Utilización del sitio web (2): registro y contraseñas
      </Title>
      <Text className="mb-12">
        El usuario se hace responsable del registro que pudiera ser necesario
        para solicitar o utilizar determinados servicios. Así, el usuario es
        responsable de aportar información veraz y lícita en dicho registro. Si
        como consecuencia de ese registro se dotase al usuario de una
        contraseña, éste se compromete a hacer un uso cuidadoso de la misma y a
        mantenerla en secreto y a no ceder su uso a terceros. Es responsabilidad
        del usuario notificar de forma inmediata a ROLA cualquier hecho que
        permita el uso indebido de dicha contraseña, como robo, extravío o
        utilización por terceros no autorizados, para poder proceder a su
        inmediata cancelación. ROLA queda eximida de cualquier responsabilidad
        que pudiera derivarse del uso indebido de las contraseñas por terceros
        no autorizados.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Exclusión de garantías y responsabilidades
      </Title>
      <Text className="mb-12">
        ROLA informa que la información contenida en los documentos y gráficos
        de esta web se publican «como están» sin garantías de ninguna clase y
        rechazan toda garantía respecto a esta información, incluyendo todas las
        garantías y condiciones implícitas de comercialización, idoneidad para
        un propósito particular, titularidad y no-infracción. En ningún caso
        ROLA y/o sus proveedores serán responsables por ningún daño especial,
        indirecto o consecuencial que se derive de una imposibilidad de uso,
        pérdida de datos o beneficios, que puedan derivarse de una acción
        contractual o extracontractual en relación con el uso o utilización de
        información disponible en esta web.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Contenidos y modificaciones
      </Title>
      <Text className="mb-12">
        La información contenida en esta web podría incluir erratas o errores y
        está sometida a cambios constantes, por lo que ROLA se reserva el
        derecho a actualizar, modificar o eliminar dicha información.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Propiedad Intelectual e Industrial
      </Title>
      <Text className="mb-12">
        Los derechos de propiedad intelectual de este sitio web, su diseño
        gráfico y códigos son titularidad de ROLA. Todos los derechos
        reservados. La totalidad del contenido artístico y a su efecto la
        propiedad intelectual son titularidad de cada artista registrado en la
        plataforma y que ha subido a la misma dicho contenido. ROLA no se hace
        responsable por el contenido facilitado por los artistas. En caso de
        reclamación de derechos por parte de un tercero, será el usuario que
        haya subido dicho contenido, el responsable de demostrar su propiedad
        sobre el material o en su defecto, hacerse cargo de los daños y
        perjuicios causados por la utilización de contenido que no es de su
        autoría. Así, queda expresamente prohibida su reproducción,
        distribución, comunicación pública, transformación o cualquier otra
        actividad que se pueda realizar con los contenidos de sus páginas web ni
        aun citando las fuentes, salvo consentimiento por escrito de ROLA.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Enlaces («links») de terceros
      </Title>
      <Text className="mb-12">
        ROLA no asume responsabilidad alguna por la información contenida en
        páginas web de terceros a las que se pueda acceder por «links» o enlaces
        desde cualquier página web propiedad de ROLA. La presencia de «links» o
        enlaces en las páginas web de ROLA tiene finalidad meramente informativa
        y en ningún caso supone sugerencia, invitación o recomendación sobre los
        mismos.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Política de Cookies
      </Title>
      <Text className="mb-12">
        Se expone en una se cción exclusiva: ver Política de cookies.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Política de Privacidad
      </Title>
      <Text className="mb-12">
        Se expone en su una sección exclusiva: ver Política de Privacidad.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Derecho de exclusión y medidas generales
      </Title>
      <Text className="mb-12">
        ROLA se reserva el derecho a limitar o denegar, sin previo aviso, el
        acceso a este sitio web a cualquier usuario que no cumpla la legislación
        vigente y las presentes Condiciones Generales que regulan el acceso y
        uso de este sitio web. ROLA se reserva el derecho a ejercer cuantas
        acciones estén disponibles en derecho para exigir las responsabilidades
        que se deriven del incumplimiento por parte de un usuario de cualquiera
        de las disposiciones de estas Condiciones Generales.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Legislación
      </Title>
      <Text className="mb-12">
        El presente Aviso Legal así como cualquier relación entre el usuario y
        el sitio web http://www.rola.es se encuentran regidos por la legislación
        española. Para cualquier cuestión litigiosa, ambas partes, con renuncia
        expresa a cualquier otro fuero que pudiera corresponderles, se someterán
        a la jurisdicción y competencia exclusiva de los Juzgados y Tribunales
        de la ciudad de Madrid. Los servicios ofrecidos por la web de ROLA se
        dirigen exclusivamente a residentes en España. Todas aquellas personas
        físicas o jurídicas residentes o domiciliadas en otros países de la
        Unión Europea o fuera de la Unión Europea deberán asegurarse de que el
        acceso y uso del sitio web y/o de su contenido les está permitido de
        conformidad con su propia legislación. En cualquier caso, el acceso y
        uso del sitio web por parte de un usuario que no cumpla con el requisito
        de residencia en España se entenderá realizado bajo su exclusiva
        responsabilidad, exonerando a ROLA de cualquier responsabilidad en la
        medida en que así lo permita la legislación aplicable.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Actualización del Aviso Legal
      </Title>
      <Text className="mb-12">
        ROLA se reserva expresamente el derecho a realizar cambios en el
        presente Aviso Legal cuando lo estime necesario, en cuyo caso estos
        quedarán debidamente publicados aquí mismo. El usuario reconoce y acepta
        que es su responsabilidad revisar el Aviso Legal.
      </Text>

      <Title order={4} align="left" className="text-brand pb-4 uppercase">
        Aceptación del acuerdo de servicio de Stripe
      </Title>
      <Text className="mb-12">
        Los servicios de procesamiento de pago para artistas en ROLA son
        proporcionados por Stripe y están sujetos al Acuerdo de cuentas
        conectadas de Stripe (
        <a
          className="hover:text-brand underline"
          href="https://stripe.com/connect-account/legal/full"
          rel="noreferrer,noopener"
          target="_blank"
        >
          Stripe Connected Account Agreement
        </a>
        ), que incluye los Términos de servicio de Stripe (Stripe Terms of
        Service), en conjunto, el “Acuerdo de servicio de Stripe” (
        <a
          className="hover:text-brand underline"
          href="https://stripe.com/es/legal"
          rel="noreferrer,noopener"
          target="_blank"
        >
          “Stripe Services Agreement”
        </a>
        ). Al aceptar estos términos o seguir operando como artista en ROLA,
        usted acepta cumplir las obligaciones del Acuerdo de servicios de
        Stripe, que puede ser modificado por Stripe de tanto en tanto. Para que
        ROLA pueda ofrecer servicios de procesamiento de pagos a través de
        Stripe, usted acepta proporcionar a ROLA información completa y exacta
        sobre usted y su negocio, y autoriza a ROLA a compartir dicha
        información y los datos de las transacciones relacionadas con el uso de
        los servicios de procesamiento de pago proporcionados por Stripe.
      </Text>
    </Container>
  );
}

export { LegalNoticePageUI };
