import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "An error occured ? Please try again later",
    });
  }
}
