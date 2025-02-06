import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

//  Definisikan tipe data untuk token payload
interface DecodedToken {
  role: string;
  exp?: number;  // Optional: untuk waktu kedaluwarsa token (jika digunakan)
  iat?: number;  // Optional: untuk waktu token dibuat
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; //  Pastikan mendapatkan nilai token

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken; //  Gunakan tipe DecodedToken

    // ✅ Cek role untuk akses halaman
    if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/member", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/member") && decoded.role !== "member") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Token verification error:", error); //  Logging untuk debugging
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/member/:path*"], //  Middleware hanya untuk rute admin/member
};
