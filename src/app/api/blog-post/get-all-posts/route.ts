import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const getAllBlogPosts = await prisma.post.findMany();
    if (getAllBlogPosts && getAllBlogPosts.length) {
      return NextResponse.json({
        success: true,
        data: getAllBlogPosts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "failed to fetch blog posts. try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "An error occured ? Please try again later",
    });
  }
}
