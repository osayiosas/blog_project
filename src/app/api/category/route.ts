import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const extractCategoryID = searchParams.get("categoryID");

    const getBlogCategoryBasedOnCurrentCategoryID = await prisma.post.findMany({
      where: {
        category: extractCategoryID || "",
      },
    });

    if (getBlogCategoryBasedOnCurrentCategoryID) {
      return NextResponse.json({
        success: true,
        data: getBlogCategoryBasedOnCurrentCategoryID,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "failed to get category",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
