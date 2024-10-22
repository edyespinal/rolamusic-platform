import { ArtistSubscriptionTier } from "@rola/services/schemas";
import React from "react";

const useArtistPageData = () => {
  const [selectedSubscription, setSelectedSubscription] =
    React.useState<ArtistSubscriptionTier>("basic");

  function handleSubscriptionChange(value: ArtistSubscriptionTier) {
    setSelectedSubscription(value);
  }

  return {
    selectedSubscription,
    handleSubscriptionChange,
  };
};

export { useArtistPageData };
