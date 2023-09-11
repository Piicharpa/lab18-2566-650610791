import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Picharpa Eiamkanitchart",
    studentId: "650610791",
  });
};
