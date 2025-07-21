import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 4 } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      // If you throw, the user will not be able to upload
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { timestamp: Date.now() }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.timestamp)
      console.log("file url", file.url)
    }),

  // Route for uploading profile pictures
  profilePicture: f({ image: { maxFileSize: "1MB", maxFileCount: 1 } })
    .middleware(async () => {
      return { timestamp: Date.now() }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Profile picture uploaded at:", metadata.timestamp)
      console.log("Profile picture URL:", file.url)
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter 