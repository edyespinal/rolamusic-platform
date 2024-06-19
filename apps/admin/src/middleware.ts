import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/auth(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (
    !isPublicRoute(req) &&
    !process.env.ADMIN_EMAILS?.split(",").includes(
      auth().sessionClaims?.email as string
    )
  ) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
