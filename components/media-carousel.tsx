"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export type MediaSlide = {
  src: string
  alt: string
  caption?: string
  type?: "image" | "video"
  poster?: string
}

export function MediaCarousel({ items }: { items: MediaSlide[] }) {
  const [index, setIndex] = useState(0)
  if (!items.length) return null

  const item = items[index]
  const hasMany = items.length > 1

  return (
    <div className="w-full">
      <div className="relative">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            className="w-full max-h-80 object-cover border-2 border-black rounded-xl bg-black"
          >
            {item.alt}
          </video>
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="w-full max-h-80 object-cover border-2 border-black rounded-xl bg-white"
          />
        )}
        {hasMany && (
          <>
            <button
              type="button"
              aria-label="Previous media"
              onClick={() => setIndex((index - 1 + items.length) % items.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-full p-1.5 hover:bg-[#FFC224]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next media"
              onClick={() => setIndex((index + 1) % items.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-full p-1.5 hover:bg-[#FFC224]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
      {item.caption && <p className="text-xs text-[#393939] font-medium mt-2">{item.caption}</p>}
      {hasMany && (
        <div className="flex justify-center gap-1.5 mt-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show media ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full border border-black ${i === index ? "bg-[#0B0B0B]" : "bg-white"}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-video border-2 border-black rounded-xl overflow-hidden bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <p className="text-xs text-[#393939] font-medium mt-2">{title}</p>
    </div>
  )
}
