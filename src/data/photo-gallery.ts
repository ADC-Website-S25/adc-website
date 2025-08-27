type PhotoGalleryItem = {
  src: string; // Path to the image file
  alt: string; // Alt text for the image
}

/**
 * Add photos to the gallery of the landing section here
 * All images should be in the public/images folder
 */
export const photoGallery: PhotoGalleryItem[] = [
  { src: "/images/final-dinner1.JPG", alt: "final dinner with members" },
  { src: "/images/final-dinner2.jpg", alt: "final dinner with members" },
  // { src: "/images/", alt: ""},
]