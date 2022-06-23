import { IGetPodcastAudioStreamRepository } from "@/modules/podcast/controllers/interfaces/repositories";
import { FileSystemAdapter } from "@/modules/podcast/infrastructure/repositories";

export class FileSystemAdapterFactoryImpl {
  constructor() {}
  makeGetPodcastAudioStreamRepository(): IGetPodcastAudioStreamRepository {
    return new FileSystemAdapter();
  }
}

export const fileSystemAdapterFactoryImpl = new FileSystemAdapterFactoryImpl();
