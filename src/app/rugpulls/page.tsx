import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import { DEFAULT_UPLOAD_DATE } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Rugpulls - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/rugpulls/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Rugpulls", "Web3 Scams", "Crypto"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Rugpulls - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Rugpulls - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Rugpulls() {
  const videoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Rugpulls loop video",
      description: "Loop video for the Rugpulls page by Emma-Jane MacKinnon-Lee.",
      thumbnailUrl: "https://cc0web3.com/images/rugpulls.png",
      contentUrl: "https://cc0web3.com/videos/rugpulls.mp4",
      embedUrl: "https://cc0web3.com/rugpulls/",
      uploadDate: DEFAULT_UPLOAD_DATE,
      duration: "PT30S",
      creator: {
        "@type": "Person",
        name: "Emma-Jane MacKinnon-Lee",
        url: "https://emmajanemackinnonlee.com/",
      },
      license: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Alfombras Largas video",
      description: "Alfombras Largas loop video by Emma-Jane MacKinnon-Lee.",
      thumbnailUrl: "https://cc0web3.com/images/alfombras.png",
      contentUrl: "https://cc0web3.com/videos/alfombras.mp4",
      embedUrl: "https://cc0web3.com/rugpulls/",
      uploadDate: DEFAULT_UPLOAD_DATE,
      duration: "PT30S",
      creator: {
        "@type": "Person",
        name: "Emma-Jane MacKinnon-Lee",
        url: "https://emmajanemackinnonlee.com/",
      },
      license: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
  ];

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div className="relative w-full h-fit flex flex-col gap-2 lg:order-2 order-1">
        <div className="my-4 bg-red-900 text-center items-center justify-center w-full text-yellow-300 text-lg font-bold">
          «« ALFOMBRAS LARGAS »»
        </div>
        <div className="flex relative w-full h-fit flex-col gap-6">
          <div className="relative w-full flex-wrap sm:flex-nowrap sm:h-40 items-center justify-center flex flex-row gap-3">
            <video
              draggable={false}
              poster={"/images/rugpulls.png"}
              className="object-contain h-20 sm:h-full flex relative"
              autoPlay
              loop
              muted
              title="Rugpulls loop video"
              aria-label="Rugpulls loop video"
            >
              <source src={"/videos/rugpulls.mp4"} />
            </video>
            <video
              draggable={false}
              poster={"/images/alfombras.png"}
              className="object-contain h-20 sm:h-full flex relative"
              autoPlay
              loop
              muted
              title="Alfombras Largas video"
              aria-label="Alfombras Largas video"
            >
              <source src={"/videos/alfombras.mp4"} />
            </video>
          </div>
          <div className="relative w-full h-fit flex text-yellow-200 text-center text-sm justify-center items-center">
            <div className="relative w-full lg:w-1/2 flex items-start bg-red-900/60 p-2 h-[20rem] overflow-y-scroll">
              La estafa más grande no es la que te quita dinero directamente. Es la
              que te vende privacidad mientras te vigila cada movimiento. Mientras
              celebramos la descentralización y la soberanía digital, las
              herramientas que usamos todos los días nos traicionan silenciosamente.
              <br />
              <br />
              Coinbase y Base prometen libertad financiera, pero su telemetría cuenta
              otra historia. Cada interacción con tu billetera, cada solicitud de
              firma, cada conexión a una dApp, todo queda registrado y enviado a sus
              servidores. El Smart Wallet SDK tiene telemetría automática activada por
              defecto, recopilando tipos de eventos, métodos de billetera, IDs de
              correlación, versiones SDK, nombres y orígenes de aplicaciones. Datos
              enviados a endpoints de Coinbase para "análisis". Opt-out, no opt-in.
              Conveniente para ellos.
              <br />
              <br />
              Pero va más profundo. Información personal básica, Basename, datos de
              billetera, información financiera, timestamps de blockchain, IDs de
              transacciones, firmas digitales, montos, direcciones. Todo. Tu
              dispositivo, tu navegador, tu IP, tu ubicación, registros de
              diagnóstico. Compartido con partners de publicidad y marketing.
              Blockchain pública significa transparencia, dicen. Lo que no dicen es
              que están correlacionando tu dirección onchain con tu identidad offchain,
              construyendo perfiles completos de comportamiento.
              <br />
              <br />
              Las solicitudes gubernamentales cuentan la historia. Coinbase recibió
              12,716 peticiones de información de autoridades en el último período. Un
              19% más que el año anterior. Venden Coinbase Analytics a la DEA, el IRS,
              ICE. Herramientas con "capacidades sensibles de aplicación de la ley que
              no se encuentran actualmente en otras herramientas del mercado". Análisis
              multi-hop, tracking geográfico histórico, investigación de Lightning
              Network, demixing de transacciones. Partnership con Chainalysis para
              rastreo blockchain masivo. La infraestructura de vigilancia financiera
              tradicional, pero ahora en crypto. Peor, porque es permanente e
              inmutable.
              <br />
              <br />
              Pero el verdadero rugpull es más sutil. Investigación de USENIX encontró
              más de 2000 filtraciones en 211 dApps y más de 300 filtraciones en 13
              billeteras. Fingerprinting web3 es la nueva frontera de tracking. 800 de
              los top 1000 sitios web detectan si tienes billeteras instaladas.
              TikTok, The New York Times, NBC. Todos fingerprinteando tus extensiones
              crypto. Un tercio de las dApps mainstream filtran direcciones de
              billeteras a terceros, industria de publicidad y analytics. Las
              billeteras inyectan código JavaScript que cualquier sitio malicioso
              puede leer. El objeto Web3 expuesto permite fingerprinting y rastreo
              cross-site.
              <br />
              <br />
              Web3 prometía privacidad mejorada. La realidad es vigilancia mejorada.
              La paradoja es cruel. Mientras escapamos de las plataformas
              centralizadas de Web2, construimos herramientas de Web3 con peor
              tracking integrado. Metadata pública permanente en blockchain. Billeteras
              que gritan tu presencia a cada sitio que visitas. Analytics que
              correlacionan tu identidad digital completa. Todo empaquetado como
              "transparencia" y "verificabilidad".
              <br />
              <br />
              Los cypherpunks querían privacidad fuerte. Lo que tenemos es teatro de
              privacidad. Herramientas que dicen ser self-custodial pero llaman a casa
              con cada acción. Promesas de anonimato mientras construyen perfiles más
              detallados que Facebook jamás soñó. La alfombra bajo nuestros pies no es
              que nos roben las llaves. Es que las llaves mismas son el dispositivo de
              rastreo.
              <br />
              <br />
              No se trata de confiar en código o instituciones. Se trata de que el
              código está comprometido desde el diseño. Optimizado para conveniencia,
              monetización y compliance, no para privacidad. Cada transacción un
              checkpoint. Cada conexión una oportunidad de correlación. Cada wallet
              instalada un beacon anunciando tu presencia al panóptico digital.
              <br />
              <br />
              La pregunta no es si Coinbase es seguro o si Base es confiable. La
              pregunta es por qué aceptamos vigilancia integrada en las herramientas
              que supuestamente nos liberan. Por qué normalizamos telemetría
              opt-out en lugar de opt-in. Por qué celebramos descentralización mientras
              centralizamos control sobre metadata. Por qué construimos el futuro
              financiero sobre cimientos de panóptico mejorado.
              <br />
              <br />
              La alfombra más larga es la que nunca te dijeron que estaba ahí.
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
