import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/auth(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (
    !isPublicRoute(req) &&
    !process.env.ADMIN_EMAILS?.split(",").includes(
      auth().sessionClaims?.email as string
    )
  ) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
