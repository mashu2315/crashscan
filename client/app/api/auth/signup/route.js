export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return Response.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Hash the password with bcrypt
    // 2. Save to database
    // 3. Generate JWT token
    // 4. Handle duplicate email check

    // Mock token generation
    const token = `jwt_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    return Response.json(
      { 
        message: 'Signup successful',
        token,
        user: { name, email }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return Response.json(
      { message: 'An error occurred during signup' },
      { status: 500 }
    );
  }
}
