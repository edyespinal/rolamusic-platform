import { Artist } from "@rola/services/schemas";
import { atom } from "jotai";

export const currentArtist = atom<Artist | null>(null);
