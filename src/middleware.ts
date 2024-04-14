import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "@clerk/nextjs/server";
export default authMiddleware({
    debug: false
});
export const config = {
    matcher: ["/((?!.+.[//w]+$|_next).*)", "/(api|trpc)(.*)"],
    ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/in"]
};