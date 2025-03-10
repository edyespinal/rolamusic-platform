import { userFaq } from "../faq";
import { FAQPageUI } from "../ui";

async function UsersFAQPage() {
  return <FAQPageUI type="users" FAQs={userFaq} />;
}

export default UsersFAQPage;
