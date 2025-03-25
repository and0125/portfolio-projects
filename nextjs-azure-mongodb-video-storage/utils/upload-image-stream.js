export default async function UploadImageStream(
  containerClient,
  blobName,
  dataStream
) {
  // Get the block blob client from the container client
  const blobClient = containerClient.getBlockBlobClient(blobName);

  // Uploading a stream
  await blobClient.uploadStream(dataStream);

  // Return the URL stored from the blob client
  return blobClient.url;
}
