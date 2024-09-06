import { doc, getDoc, setDoc } from "firebase/firestore";
import { artistsCollection } from "../db";
import { Artist } from "../../../schemas";
import { uploadFile } from "../../storage";
import { getArtists } from "./getArtists";
import { getArtist } from "./getArtist";
import { createArtist } from "./createArtist";
import { getArtistPaymentDetails } from "./getArtistPaymentDetails";
import { updateCommunity } from "./updateCommunity";
import { getArtistCommunity } from "./getArtistCommunity";

async function updateArtist(id: string, data: Partial<Artist>) {
  try {
    await setDoc(doc(artistsCollection, id), data, { merge: true });

    return true;
  } catch (error) {
    throw new Error("Error updating artist");
  }
}

async function activateArtist(id: string, active: boolean) {
  try {
    await setDoc(doc(artistsCollection, id), { active }, { merge: true });

    return true;
  } catch (error) {
    throw new Error("Error activating artist");
  }
}

async function updateArtistProfileImage(id: string, file: File) {
  const imgUrl = await uploadFile(`img/artists/${id}/profile-${id}`, file);

  await setDoc(
    doc(artistsCollection, id),
    {
      profileURL: imgUrl,
    },
    { merge: true }
  );

  return imgUrl;
}

async function updateArtistCoverImage(id: string, file: File) {
  const imgUrl = await uploadFile(`img/artists/${id}/cover-${id}`, file);

  await setDoc(
    doc(artistsCollection, id),
    {
      coverURL: imgUrl,
    },
    { merge: true }
  );

  return imgUrl;
}

export const artistsServices = {
  getArtists,
  getArtist,
  getArtistCommunity,
  getArtistPaymentDetails,
  createArtist,
  activateArtist,
  updateArtist,
  updateArtistProfileImage,
  updateArtistCoverImage,
  updateCommunity,
};
