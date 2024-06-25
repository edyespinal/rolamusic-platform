import { Container, Underline } from "@rola/ui/components";

function CookiesPolicyPage() {
  return (
    <Container className="pt-12 pb-24">
      <div className="pb-12">
        <h1 className="text-2xl text-center uppercase font-bold">
          Política de Cookies
        </h1>
        <Underline />
      </div>

      <p className="mb-12">
        En cumplimiento de lo previsto en la Ley Orgánica 34/2002, de 11 de
        julio, de Servicios de la Sociedad de la Información y Comercio
        Electrónico LSSICE, y sus modificaciones del Real Decreto-ley 13/2012,
        de 30 de marzo, que afectan al uso de cookies y a los envíos comerciales
        por correo electrónico, y en cumplimiento de la Directiva Europea
        2009/136/CE, de 25 de noviembre, que regula la privacidad en la red,
        ROLA, pone en conocimiento de los usuarios del sitio web
        http://www.rola.es que éste colocará cookies en su ordenador o terminal
        para ayudar a mejorar su navegación en la web y obtener datos
        estadísticos.
      </p>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Qué son las cookies
      </h2>
      <p className="mb-12">
        Las cookies son archivos que los sitios web envían al navegador del
        usuario que los visita y que se almacenan en el terminal de dicho
        usuario, que puede ser un ordenador personal, un teléfono móvil, una
        tableta, etc. Estos archivos permiten que el sitio web recuerde
        información sobre la visita, como el idioma y las opciones preferidas,
        lo que puede facilitar tu próxima visita y hacer que el sitio resulte
        más útil al personalizar su contenido. Así, las cookies desempeñan un
        papel muy importante, aportando a la navegación web ventajas en la
        prestación de servicios interactivos.
      </p>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Tipos de cookies
      </h2>
      <div className="mb-8">
        <p>Por sus fines:</p>
        <ul className="list-disc">
          <li className="mt-2">
            Cookies técnicas: necesarias para el funcionamiento de la página
            web, son las denominadas también estrictamente necesarias; hacen
            posible el control de tráfico desde el servidor a múltiples usuarios
            a la vez, la identificación y el acceso como usuario del sistema,
            etc.
          </li>
          <li className="mt-2">
            Cookies de personalización: hacen posible que cada usuario pueda
            configurar aspectos como el idioma en el que desea ver la web o la
            configuración regional.
          </li>
          <li className="mt-2">
            Cookies de análisis o rendimiento: permiten medir el número de
            visitas y criterios de navegación de diferentes áreas de la web de
            forma anónima.
          </li>
          <li className="mt-2">
            Cookies de publicidad: permiten implementar parámetros de eficiencia
            en la publicidad ofrecida en las páginas web.
          </li>
          <li className="mt-2">
            Cookies de publicidad comportamental: permiten implementar
            parámetros de eficiencia en la publicidad ofrecida en las páginas
            web, basados en información sobre el comportamiento de los usuarios.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <p>Por su tiempo de persistencia en el terminal del usuario:</p>
        <ul className="list-disc">
          <li className="mt-2">
            Cookies de sesión: diseñadas para recabar y almacenar datos mientras
            el usuario accede a una página web y no quedan registradas en el
            disco del usuario.
          </li>
          <li className="mt-2">
            Cookies persistentes: diseñadas para que los datos queden
            almacenados en el terminal y puedan ser accedidos y tratados durante
            un periodo definido por el responsable de la cookie, que puede ir de
            unos minutos a varios años.
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <p>Por su responsable:</p>
        <ul className="list-disc">
          <li className="mt-2">
            Cookies propias: generadas por la propia página web que se está
            visitando.
          </li>
          <li className="mt-2">
            Cookies de terceros: se reciben al navegar por esa página web pero
            han sido generadas por un tercer servicio que se encuentra hospedado
            en ella.
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Identificación de cookies utilizadas
      </h2>
      <div className="mb-12">
        <p>
          Las cookies que utilizamos en nuestro sitio web http://www.rola.es
          son:
        </p>
        <ul className="list-disc">
          <li className="mt-2">
            Cookies de análisis, que nos permiten cuantificar el número de
            usuarios y así realizar la medición y análisis de la utilización que
            hacen del servicio ofertado. Los fines son puramente estadísticos y
            nos sirven para poder mejorar nuestros contenidos.
          </li>
          <li className="mt-2">
            Cookies de sesión, diseñadas para recabar y almacenar datos mientras
            el usuario accede a una página web. Son cookies temporales que
            permanecen en el archivo de cookies del navegador hasta que se
            abandona la página web, por lo que ninguna queda registrada en el
            disco duro del usuario. Estas cookies no recogen ninguna información
            sobre la navegación que pueda ser utilizada por acciones de
            marketing o para recordar por qué páginas se ha navegado.
          </li>
          <li className="mt-2">
            Cookies propias, generadas por la propia página web.
          </li>
          <li className="mt-2">
            Cookies de terceros, generadas por un tercer servicio que se
            encuentra hospedado en la página web.
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Administración de cookies en el navegador
      </h2>
      <div className="mb-12">
        <p>
          El usuario tiene la opción de permitir, restringir, bloquear o borrar
          las cookies de esta página web o de cualquier otra página web,
          mediante la configuración de las opciones del navegador instalado en
          su terminal. En cada navegador la operativa es diferente, la función
          de «Ayuda» te mostrará cómo hacerlo. <br />
          Si quieres borrar de tu navegador las cookies registradas por
          http://www.rola.es, aquí tienes enlaces a instrucciones para algunos
          navegadores distintos:
        </p>
        <ul className="list-disc mb-8">
          <li className="mt-2">
            Internet Explorer:
            <a
              href="http://www.windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies"
              className="hover:text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.windows.microsoft.com/es-es/internet-explorer/delete-manage-cookies
            </a>
          </li>
          <li className="mt-2">
            Google Chrome:
            <a
              href="http://www.support.google.com/chrome/answer/95647"
              className="hover:text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.support.google.com/chrome/answer/95647
            </a>
          </li>
          <li className="mt-2">
            Firefox:
            <a
              href="http://www.support.mozilla.org/kb/delete-cookies-remove-info-websites-stored"
              className="hover:text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.support.mozilla.org/kb/delete-cookies-remove-info-websites-stored
            </a>
          </li>
          <li className="mt-2">
            Safari:
            <a
              href="http://www.support.apple.com/kb/ph11920"
              className="hover:text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.support.apple.com/kb/ph11920
            </a>
          </li>
        </ul>

        <p>
          Además, también puedes gestionar el almacén de cookies en tu navegador
          a través de herramientas como las siguientes:
        </p>
        <ul className="list-disc">
          <li className="mt-2">
            Ghostery:
            <a
              href="https://www.ghostery.com"
              className="hover:text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ghostery.com
            </a>
          </li>
          <li className="mt-2">
            Your online choices:
            <a
              href="https://www.youronlinechoices.com/es/"
              className="hover:text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.youronlinechoices.com/es/
            </a>
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Aceptación de cookies
      </h2>
      <p className="mb-12">
        ROLA asume que el usuario acepta la utilización de cookies si continúa
        navegando.
      </p>

      <h2 className="text-xl font-medium uppercase pb-4 text-brand">
        Actualización de la Política de Cookies
      </h2>
      <p className="mb-12">
        Es posible que actualicemos la Política de Cookies de nuestro sitio web,
        en cuyo caso quedará debidamente publicada aquí mismo. <br />
        Por ello ROLAs recomienda al usuario revisarla cuando acceda al mismo
        para mantenerse adecuadamente informado sobre cómo y para qué usamos las
        cookies.
      </p>
    </Container>
  );
}

export default CookiesPolicyPage;
