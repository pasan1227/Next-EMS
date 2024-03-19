import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getAuthSession } from '../auth/[...nextauth]/options';

export async function POST(req: Request) {
  const session = await getAuthSession();
  if (!session || session.user.role !== 'ADMIN') {
    throw new NextResponse('Unauthorized', { status: 401 });
  }
  const body = await req.json();
  const { name, description, manager } = body;

  if (!name || !description) {
    return new Response(`All fields are required`, {
      status: 400,
    });
  }
  try {
    // Initialize the department data without assigning a manager initially
    const departmentData = {
      name,
      description,
    };

    // Check if manager is provided and exists
    if (manager) {
      departmentData['managerId'] = manager;
      departmentData['employees'] = {
        connect: [{ id: manager }], // Connect the manager to the department's employees
      };
    }

    const department = await prisma.department.create({
      data: departmentData,
      include: {
        employees: true, // Include the employees relation in the created department
        manager: true, // Include the manager relation in the created department
      },
    });

    return NextResponse.json(department);
  } catch (error: any) {
    return new Response(`Could not create department - ${error.message}`, {
      status: 500,
    });
  }
}
export async function GET(req: Request) {
  const session = await getAuthSession();
  if (!session || session.user.role !== 'ADMIN') {
    throw new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    const departments = await prisma.department.findMany({
      include: {
        employees: true,
        manager: true,
      },
    });
    if (!departments) {
      return new Response(`Could not find departments`, {
        status: 404,
      });
    }

    return NextResponse.json(departments);
  } catch (error: any) {
    return new Response(`Could not fetch departments - ${error.message}`, {
      status: 500,
    });
  }
}
