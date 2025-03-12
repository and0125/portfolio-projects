import MongoDBClient from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Topic from "@/models/topics"

export async function POST(request) {
    const { title, description} = await request.json();

    await MongoDBClient({databaseName:"topics"});

    await Topic.create({title, description})
    return NextResponse.json({message:"topic created"}, {status: 201})
}

export async function GET() {
    await MongoDBClient({databaseName:"topics"});
    const topics = await Topic.find();
    return NextResponse.json({topics})   
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await MongoDBClient({databaseName:"topics"});
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:`Topic ${id} deleted`}, {status: 200})   
}