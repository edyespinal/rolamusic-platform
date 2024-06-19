import { clerkMiddleware } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(["/auth/sign-out", "/auth/sign-in"]);

export default clerkMiddleware();

// export default clerkMiddleware((auth, req) => {
// if (!isPublicRoute(req)) {
//   auth().protect();
// }
// });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
