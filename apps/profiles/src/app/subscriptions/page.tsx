import { subscriptionsPageController } from "./controller";
import { SubscriptionsPageUI } from "./ui";

async function SubscriptionsPage() {
  const data = await subscriptionsPageController();

  return <SubscriptionsPageUI subscriptions={data.subscriptions} />;
}

export default SubscriptionsPage;
