import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractIdOfBlogItemToBeDeleted = url.searchParams.get("id");

    const deletedBlogPost = await prisma.post.delete({
      where: {
        id: Number(extractIdOfBlogItemToBeDeleted),
      },
    });

    if (deletedBlogPost) {
      return NextResponse.json({
        success: true,
        message: "Post Deleted Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "An error occured ? Please try again later",
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
