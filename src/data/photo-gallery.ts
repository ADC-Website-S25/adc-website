type PhotoGalleryItem = {
  src: string; // Path to the image file
  alt: string; // Alt text for the image
}

/**
 * Add photos to the gallery of the landing section here
 * All images should be in the public/images folder
 */
export const photoGallery: PhotoGalleryItem[] = [
  { src: "/images/example-group-photo.png", alt: "Group photo of ADC members" },
  { src: "/common/adc-256.png", alt: "adc logo"},
  // { src: "/images/", alt: ""},
]