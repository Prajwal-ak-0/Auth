import bcrypt from 'bcrypt'
import {NextResponse} from 'next/server'
import {prisma} from "@/lib/db";

export async function POST(request:Request) {
    const body=await request.json();
    const {email,name,password,rePassword}=body;


    if(!email || !name || !password || !rePassword){
        throw new Error("All fields are required!");
    }

    const userExists=await prisma.user.findUnique({
        where:{
            email
        }
    });

    if(userExists){
        throw new Error("User Already Exists");
    }
    
    if(password!==rePassword){
        throw new Error("Password Does Not Match!");
    }

    const hashedPassword=await bcrypt.hash(password,5);

    const user=await prisma.user.create({
        data:{
            email,
            name,
            password:hashedPassword
        }
    });

    return NextResponse.json(user);
}