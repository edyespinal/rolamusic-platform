export const ARTISTS = "artists";
export const GUESTS = "guestlist";
export const USERS = "users";
export const PODCAST = "podcast";
export const PODCAST_EPISODES = "podcastEpisodes";

export const COMMUNITY_INFO = "supportInfo";
export const PAYMENT_DETAILS = "paymentInfo";

export const PARTICULAR = "particular";
export const FREELANCE = "freelance";
export const COMPANY = "company";

export const DNI = "DNI";
export const NIE = "NIE";
export const CIF = "CIF";
export const NIF = "NIF";

export const BANK_TRANSFER = "bankTransfer";
export const PAYPAL = "paypal";

export const subscriptionTiers = {
  basic: {
    type: "basic",
    value: 300,
    label: "Básico",
    description:
      "El apoyo a tu artista es indispensable para su crecimiento musical. Gracias por ser parte del soporte que le permitirá seguir desarrollando su talento.",
  },
  premium: {
    type: "premium",
    value: 600,
    label: "Premium",
    description:
      "No es cuestión de cuánto… es el hecho de hacerle saber que crees en su talento y estás dispuesto a apoyarlo en el camino a cumplir sus objetivos.",
  },
  gold: {
    type: "gold",
    value: 900,
    label: "Gold",
    description:
      "El apoyo a tu artista es indispensable para su crecimiento musical. Gracias por ser parte del soporte que le permitirá seguir desarrollando su talento.",
  },
} as const;
