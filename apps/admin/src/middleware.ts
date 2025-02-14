import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/auth(.*)", "/api/migrate"]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    if (auth().sessionClaims && auth().sessionClaims?.role !== "admin") {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
