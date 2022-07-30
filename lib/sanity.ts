import { createClient, createPreviewSubscriptionHook } from "next-sanity"

import createImageUrlBuilder from "@sanity/image-url"

const config = {
  projectId: "gndcp5la",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const urlFor = (source: ImageBitmap) =>
  createImageUrlBuilder(config).image(source)
