import { ContainerClient } from "@azure/storage-blob";
import { blob } from "stream/consumers";

export default async function UploadImageStream(blobName, dataStream) {
  // grabbing blob client
  const blobClient = ContainerClient.getBlockBLockClient(blobName);

  //uploading a stream
  await blobClient.uploadStream(dataStream);

  // accesses the url stored from the blob client
  return blobClient.url;
}
