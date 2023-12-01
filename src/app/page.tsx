import { ModeToggle } from "@/components/Theme/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World!!</h1>

      <ModeToggle />
    </main>
  )
}
