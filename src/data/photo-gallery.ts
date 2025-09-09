type PhotoGalleryItem = {
  src: string; // Path to the image file
  alt: string; // Alt text for the image
}

/**
 * Add photos to the gallery of the landing section here
 * All images should be in the public/images folder
 */
export const photoGallery: PhotoGalleryItem[] = [
  { src: "/images/landing-carousel/symposium-1.jpg", alt: "Symposium 2025" },
  { src: "/images/landing-carousel/bootcamp-1.jpg", alt: "Spring 2025 Bootcamp" },
  { src: "/images/landing-carousel/final-dinner-group.jpg", alt: "Final Dinner Group" },
  { src: "/images/landing-carousel/symposium-2.jpg", alt: "Symposium 2025" },
  { src: "/images/landing-carousel/valentines-event.jpg", alt: "Valentine's Event 2025" },
]