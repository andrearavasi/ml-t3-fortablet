import { SignIn, SignInButton, SignOutButton } from "@clerk/nextjs";
import Head from "next/head";
import router from "next/router";
import { text } from "stream/consumers";
import { Button } from "~/components/ui/button"
import { api } from "~/utils/api";

export default function In() {
  return (
    <>
      <Head>
        <title>ML T3 ForTablet</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-300 to-slate-700 gap-10">
        <div className="bg-slate-200 gap-28 flex flex-col p-6 justify-evenly items-center rounded sm:w-96 md:w-max lg:w-max h-max">
          <div className="flex items-center">
            <img rel="icon" src="/logo.png"></img>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col gap-10 justify-center items-center rounded w-11/12">
              <div className="bg-gradient-to-b from-slate-400 to bg-slate-300 w-full rounded flex justify-center items-center h-40 font-sans font-semibold text-3xl">
                <Button size={"max"} onClick={() => router.push('/in/login')}>Accedi</Button>
              </div>
              <div className="bg-gradient-to-b from-slate-300 to bg-slate-400 w-full rounded flex justify-center items-center h-40 font-sans font-semibold text-3xl">
                <Button size={"max"} onClick={() => router.push('/in/signup')}>Registrati</Button>
              </div>
            </div>
          </div>
          <div>
            <Button onClick={() => router.back()}>Indietro</Button>
          </div>
        </div>
      </main>
    </>
  );
}
