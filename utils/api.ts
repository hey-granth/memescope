import type { Meme } from "@/types/meme"

export async function fetchMemes(): Promise<Meme[]> {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/memes/")

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data: Meme[] = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching memes:", error)
    throw error
  }
}
