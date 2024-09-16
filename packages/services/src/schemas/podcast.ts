import z from "zod";

const podcastEpisodeSchema = z.object({
  id: z.string(),
  number: z.number(),
  title: z.string(),
  description: z
    .string()
    .min(1, "La descripción del episodio no puede estar vacío")
    .optional(),
  guest: z.string().optional(),
  url: z.string(),
  publishedAt: z.string(),
});

export { podcastEpisodeSchema };

export type PodcastEpisode = z.infer<typeof podcastEpisodeSchema>;
