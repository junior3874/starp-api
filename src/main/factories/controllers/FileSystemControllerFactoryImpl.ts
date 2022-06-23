import { ListenToPodcastController } from "@/modules/podcast/controllers";
import { fileSystemAdapterFactoryImpl } from "../repositories/FileSystemAdapterFactoryImpl";

export class FileSystemControllerFactoryImpl {
  makeListenToPodcastController(): ListenToPodcastController {
    return new ListenToPodcastController(
      fileSystemAdapterFactoryImpl.makeGetPodcastAudioStreamRepository()
    );
  }
}

export const fileSystemControllerFactoryImpl =
  new FileSystemControllerFactoryImpl();
