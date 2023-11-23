
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {

    console.log("Passei pelo middleware: " + new Date().toISOString())

    const user_access_token = req.cookies.get("user_access_token")?.value
    console.log("Cookie abaixo")
    console.log(user_access_token)
    
    if (!user_access_token) {
        //Se não tive o token e ja estiver em "/" ele deixa prosseguir para pagina de login
        if (req.nextUrl.pathname === "/") {
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL("/", req.url))
    }

    if (user_access_token) { 

        if (false) {

            if (req.nextUrl.pathname === "/") {
                return NextResponse.next()
            }
            //Se Não tiver token e for invalido
            return NextResponse.redirect(new URL("/", req.url))
        }
    }



    if (req.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

}

export const config = {
    matcher: [
        '/', '/dashboard/:path*'
    ]
}