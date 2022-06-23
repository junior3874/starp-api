import path from "path";
import fs from "fs";
import mime from "mime";

import {
  GetPodcastAudioStreamRepositoryDTO,
  IGetPodcastAudioStreamRepository,
} from "../../controllers/interfaces/repositories";

export class FileSystemAdapter implements IGetPodcastAudioStreamRepository {
  async getStream(
    DTO: GetPodcastAudioStreamRepositoryDTO.Request
  ): Promise<GetPodcastAudioStreamRepositoryDTO.Response> {
    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "uploads",
      `${DTO.id}.mp3`
    );

    if (!fs.existsSync(filePath)) {
      return undefined;
    }

    const audioSize = fs.statSync(filePath).size;

    const stream = fs.createReadStream(filePath, {
      start: Math.min(DTO.start, audioSize - 1),
      end: DTO.end,
    });

    const mimeType = mime.getType(path.extname(filePath)) || "audio/*";

    return { stream, audioSize, mimeType };
  }
}
