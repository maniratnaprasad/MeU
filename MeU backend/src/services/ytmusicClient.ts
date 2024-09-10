import YTMusic from "ytmusic-api";

class YtMusicClient {
  private static instance: YTMusic | null = null;

  private constructor() {}

  public static async getInstance(): Promise<YTMusic> {
    if (!YtMusicClient.instance) {
      YtMusicClient.instance = new YTMusic();
      await YtMusicClient.instance.initialize();
    }
    return YtMusicClient.instance;
  }
}

export default YtMusicClient;
