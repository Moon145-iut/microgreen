import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/app/utils/auth';
import { sendVerificationEmail } from '@/app/utils/email';

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const { user, verificationToken } = await createUser(email, password, name);
    await sendVerificationEmail(email, verificationToken);

    return NextResponse.json(
      { message: 'Registration successful. Please check your email to verify your account.' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to register user' },
      { status: 500 }
    );
  }
}
