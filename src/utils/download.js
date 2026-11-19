import { toPng } from "html-to-image";

// Turn an HTML element into a PNG file and download it
export async function downloadImage(element, fileName) {
  try {
    const image = await toPng(element, { cacheBust: true, pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = fileName;
    link.href = image;
    link.click();
  } catch {
    alert("Could not create the image. Please try again.");
  }
}
