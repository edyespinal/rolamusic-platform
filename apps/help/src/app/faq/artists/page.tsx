import { artistFaq } from "../faq";
import { FAQPageUI } from "../ui";

function ArtistsFAQPage() {
  return <FAQPageUI type="artists" FAQs={artistFaq} />;
}

export default ArtistsFAQPage;
