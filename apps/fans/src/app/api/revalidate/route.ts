import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const tag = searchParams.get("tag");

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
