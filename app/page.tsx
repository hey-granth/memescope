import MemeGrid from "@/components/meme-grid"
import { Suspense } from "react"
import { MemeGridSkeleton } from "@/components/meme-grid-skeleton"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-10">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 flex flex-col items-center">
          <div className="absolute right-4 top-4">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-2">🔥 MemeScope</h1>
          <p className="text-gray-500 dark:text-gray-400">Discover trending memes from across the internet</p>
        </header>

        <Suspense fallback={<MemeGridSkeleton />}>
          <MemeGrid />
        </Suspense>
      </div>
    </main>
  )
}
