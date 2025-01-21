import { z } from "zod";
import { artistSchema } from "./artist";
import { artistMemberSchema } from "./artistMember";
import { artistCommunitySchema } from "./artistCommunity";
import { artistPostSchema } from "./artistPost";
import { artistPaymentSchema } from "./artistPayment";
import { artistAlbumsSchema } from "./artistAlbum";
import { artistSocialsSchema } from "./artistSocials";
import { subscriptionTierSchema } from "./subscriptionTier";

export { artistSchema };
export { artistMemberSchema };
export { artistCommunitySchema };
export { artistPostSchema };
export { artistPaymentSchema };
export { artistAlbumsSchema };
export { artistSocialsSchema };

export type Artist = z.infer<typeof artistSchema>;
export type ArtistMember = z.infer<typeof artistMemberSchema>;
export type ArtistCommunity = z.infer<typeof artistCommunitySchema>;
export type ArtistPost = z.infer<typeof artistPostSchema>;
export type ArtistPayment = z.infer<typeof artistPaymentSchema>;
export type ArtistAlbums = z.infer<typeof artistAlbumsSchema>;
export type ArtistSocials = z.infer<typeof artistSocialsSchema>;
export type ArtistSubscriptionTier = z.infer<typeof subscriptionTierSchema>;
