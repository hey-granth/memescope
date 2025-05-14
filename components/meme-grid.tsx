"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowBigUp, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import type { Meme } from "@/types/meme"
import { fetchMemes } from "@/utils/api"
import { MemeGridSkeleton } from "./meme-grid-skeleton"

export default function MemeGrid() {
  const [memes, setMemes] = useState<Meme[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getMemes = async () => {
      try {
        setLoading(true)
        const data = await fetchMemes()
        setMemes(data)
      } catch (err) {
        setError("Failed to fetch memes. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getMemes()
  }, [])

  if (loading) {
    return <MemeGridSkeleton />
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {memes.map((meme, index) => (
        <MemeCard key={meme.id} meme={meme} index={index} />
      ))}
    </div>
  )
}

function MemeCard({ meme, index }: { meme: Meme; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow border-gray-200 dark:border-gray-800">
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <h2 className="font-medium text-lg line-clamp-2 text-gray-900 dark:text-gray-50" title={meme.title}>
              {meme.title}
            </h2>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">r/{meme.subreddit}</div>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-grow">
          {meme.image_url && (
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
              <img
                src={meme.image_url || "/placeholder.svg"}
                alt={meme.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800">
              <ArrowBigUp className="h-3.5 w-3.5" />
              {meme.upvotes.toLocaleString()}
            </Badge>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 border-gray-200 dark:border-gray-700">
            <MessageSquare className="h-3.5 w-3.5" />
            {meme.comments.toLocaleString()}
          </Badge>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
