import MongoDBClient from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function PUT(request, { params }) {
  const { id } = params;

  const { newTitle: title, newDescription: description } = await request.json();

  await MongoDBClient({ databaseName: "topics" });

  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: `Topic ${id} updated` }, { status: 200 });
}

export async function GET(request, context) {
  const { params } = context;
  const { id } = params;

  await MongoDBClient({ databaseName: "topics" });

  const topic = await Topic.findOne({ _id: new mongoose.Types.ObjectId(id) });

  return NextResponse.json({ topic }, { status: 200 });
}
