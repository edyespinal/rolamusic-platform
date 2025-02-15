import React from "react";
import { db } from "@rola/services/firebase";
import { EditSubscriptionTierPageUI } from "./ui";

async function EditSubscriptionTierPage({
  params,
}: {
  params: {
    id: string;
    configId: string;
  };
}) {
  const tier = await db.artists.getArtistSubscriptionTier(
    params.id,
    params.configId
  );

  if (!tier.data || !tier.success) {
    throw new Error("Algo ha salido mal cargando la suscripción");
  }

  return <EditSubscriptionTierPageUI artistId={params.id} tier={tier.data} />;
}

export default EditSubscriptionTierPage;
