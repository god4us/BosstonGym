import prisma from '../../../utils/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
      console.log('Fetching members...');
      const users = await prisma.user.findMany();
      console.log(users); // Log hasil query
      return NextResponse.json(users);
    } catch (error) {
      console.error('Error fetching members:', error); // Log error
      return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
    }
  }
  
