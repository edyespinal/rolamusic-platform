import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  try {
    const { tag } = await request.json();

    if (!tag) {
      return Response.json({ error: "tag is required" }, { status: 400 });
    }

    revalidateTag(tag);

    return Response.json({ message: `Cache revalidated for tag: ${tag}` });
  } catch (error) {
    return Response.json(
      { error: "Failed to revalidate cache" },
      { status: 500 }
    );
  }
}
