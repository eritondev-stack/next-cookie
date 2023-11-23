'use client'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'



export default function Page() {
    const router = useRouter()
    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
                <button onClick={async () => {

                    const options: Cookies.CookieAttributes = {
                        secure: false,
                    }

                    Cookie.set("user_access_token", "ola-bla-bla-bla-teste", options)
                    router.push("/dashboard")

                }} className='bg-blue-300 rounded-md text-white dark:bg-indigo-300 dark:text-white dark:rounded-md px-5 py-2'>Login Supabase</button>

            </div>
        </>
    )
}