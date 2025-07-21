"use client"

import { UploadButton } from "@uploadthing/react"
import type { OurFileRouter } from "../api/uploadthing/core"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function TestUpload() {
  const [uploadedImages, setUploadedImages] = useState<
    { url: string; key: string }[]
  >([])

  return (
    <div className="mx-auto max-w-2xl space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Test File Upload</h1>
        <p className="text-gray-500">Upload product images (max 4 files, 4MB each)</p>

        <div className="rounded-lg border p-4">
          <UploadButton<OurFileRouter, "productImage">
            endpoint="productImage"
            onClientUploadComplete={(res) => {
              if (res) {
                const newImages = res.map((file) => ({
                  url: file.url,
                  key: file.key,
                }))
                setUploadedImages((prev) => [...prev, ...newImages])
                alert("Upload Completed")
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`)
            }}
          />
        </div>

        {uploadedImages.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Uploaded Images</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {uploadedImages.map((image, index) => (
                <div key={image.key} className="relative aspect-square">
                  <Image
                    src={image.url}
                    alt={`Uploaded image ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => {
                      setUploadedImages((prev) =>
                        prev.filter((img) => img.key !== image.key)
                      )
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 