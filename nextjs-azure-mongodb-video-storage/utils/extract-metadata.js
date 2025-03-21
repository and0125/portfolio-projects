export default async function ExtractMetadata(headers) {
  // uses headers to assign values to metadata, which gets stored in mongodb

  const contentType = headers["content-type"];
  const fileType = contentType.split("/")[1];

  // this I didn't quite understand what its for
  const contentDisposition = headers["content-disposition"];

  const caption = headers["x-image-caption"] || null;

  // uses regex to find a filename from the disposition provided
  const matches = /filename="([^"]+)/i.exec(contentDisposition);

  const fileName = matches?.[1] || `image-${Date.now()}.${fileType}`;

  return { fileName, caption, fileType };
}
