export async function POST(req) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ message: "Only POST requests allowed" }),
      { status: 405 }
    );
  }

  const data = await req.json();
  const { token } = data;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return new Response(JSON.stringify({ message: "Token not found" }), {
      status: 400
    });
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      }
    );
    
    const responseData = await response.json();

    if (responseData.success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200
      });
    } else {
      console.error("reCAPTCHA verification failed:", responseData["error-codes"]);
      return new Response(JSON.stringify({ 
        success: false, 
        message: "reCAPTCHA verification failed",
        errors: responseData["error-codes"] || []
      }), {
        status: 400
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: "Internal Server Error" 
    }), {
      status: 500
    });
  }
} 