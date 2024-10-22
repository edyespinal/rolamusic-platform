import { ArtistSubscriptionTier } from "@rola/services/schemas";
import { subscriptionTiers } from "@rola/services/constants";
import { cn } from "@rola/tailwind-config/utils";
import { Button, Container, Text } from "@rola/ui/components";

function SubscriptionTier({
  type,
  selected,
  extended = false,
  onClick,
}: {
  type: ArtistSubscriptionTier;
  selected?: boolean;
  extended?: boolean;
  onClick?: () => void;
}) {
  return (
    <Container
      className="border-brand relative flex grow cursor-pointer flex-col border-2"
      onClick={onClick}
    >
      <div
        className={cn(
          "font-brush flex items-center px-8 py-4 font-medium uppercase",
          selected ? "bg-brand text-black" : "text-brand bg-transparent"
        )}
      >
        <div
          className={cn("flex pr-4", selected ? "text-black" : "text-white")}
        >
          <div className="pr-1 text-6xl">
            {subscriptionTiers[type].value / 100}
          </div>
          <div className="text-xl">
            <div>,00</div>
            <div>/mes</div>
          </div>
        </div>
        <div className="flex flex-col text-xl leading-4">
          Apadrinamiento
          <span className="text-4xl">{subscriptionTiers[type].label}</span>
        </div>
      </div>

      {extended && (
        <div className="flex grow flex-col justify-between px-6 pb-4">
          <Text className="mb-8 border-t pt-4">
            {subscriptionTiers[type].description}
          </Text>
        </div>
      )}
    </Container>
  );
}

export { SubscriptionTier };
