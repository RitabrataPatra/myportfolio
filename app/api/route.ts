
import dbSetup from "@/db/dbSetup";
import Project from "@/db/Project";
import { NextRequest, NextResponse } from "next/server";



export const handleError = (error: any) => {
  console.error("API Error:", error.message || error);
  return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
};

export async function GET(req: NextRequest) { // ❌ Removed `res` parameter
  try {
    await dbSetup();
    const data = await Project.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(req: Request){
  try {
    await dbSetup();
    const body = await req.json();
    const data = await Project.create(body);
    return Response.json(data, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}