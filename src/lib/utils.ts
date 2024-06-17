import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "Arjun Bector",
  description = "Welcome to my web development portfolio! I'm Arjun Bector, a skilled web developer specializing in full-stack development. Explore my innovative web solutions, responsive designs, and interactive applications built with HTML, CSS, JavaScript, React, Node.js, and more. Check out my projects and see how I can bring your digital vision to life.",
  image = "/image.jpg",
  icons = "/favicon.ico"
}: {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {}): Metadata {
  return {
    title, description, openGraph: {
      title, description, images: [{ url: image }]
    },
    icons,
    metadataBase: new URL("https://arjunbector.live")
  }
}