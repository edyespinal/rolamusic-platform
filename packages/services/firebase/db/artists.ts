import {
  arrayRemove,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import {
  artistCommunityCollection,
  artistsCollection,
  batch,
  usersCollection,
} from "./db";
import { Artist, ArtistCommunity } from "../../schemas";
import { uploadFile } from "../storage";

async function getArtists(): Promise<Artist[]> {
  const artistsDocs = await getDocs(artistsCollection);

  if (artistsDocs.empty) {
    throw new Error("Artists not found");
  }

  const artistData = artistsDocs.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return artistData;
}

async function getArtist(id: string): Promise<Artist> {
  const artistDoc = await getDoc(doc(artistsCollection, id));

  if (!artistDoc.exists()) {
    throw new Error("Artist not found");
  }

  const artistData = {
    ...artistDoc.data(),
    id: artistDoc.id,
  };

  return artistData;
}

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

async function getArtistCommunity(id: string): Promise<ArtistCommunity> {
  const community = await getDoc(doc(artistCommunityCollection(id), id));

  if (!community.exists()) {
    throw new Error("Community not found");
  }

  const communityData = {
    ...community.data(),
    id: community.id,
  };

  return communityData;
}

async function updateCommunity(id: string, data: Partial<ArtistCommunity>) {
  try {
    await setDoc(doc(artistCommunityCollection(id), id), data, { merge: true });

    return true;
  } catch (error) {
    throw new Error("Error updating community");
  }
}

export const artistsServices = {
  getArtists,
  getArtist,
  activateArtist,
  updateArtist,
  updateArtistProfileImage,
  updateArtistCoverImage,
  getArtistCommunity,
  updateCommunity,
};
