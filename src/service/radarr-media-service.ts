import { RadarrWebClient } from "../web-client/radarr-web-client";
import { RadarrQueueRecord } from "../model/RadarrQueueRecord";
import { Constants } from "../utils/constants";

export class RadarrMediaService {
  private radarrWebClient;

  constructor(
    baseUrl: string,
    apiKey: string,
    selfSignedSSL: boolean = false,
    timeout: number = Constants.radarr.default.timeout,
    baseApiPath: string = Constants.radarr.default.baseApiPath
  ) {
    this.radarrWebClient = new RadarrWebClient(baseUrl, baseApiPath, apiKey, selfSignedSSL, timeout);
  }

  /**
   * Get the download queue from Radarr.
   * @param page - The page number to get.
   * @param pageSize - The number of items per page.
   *                   Optional: Set the env param of SONARR_QUEUE_SIZE to override defaults.
   *                   No need to pass the parameter in that case. Defaults to 100.
   * @return { Promise<Array<RadarrQueueRecord>> } - A promise with the records found by the search query.
   */
  async getDownloadQueue(page: number, pageSize?: number): Promise<Array<RadarrQueueRecord>> {
    return this.radarrWebClient.getDownloadQueue(page, pageSize, (error) => {
      console.log(error);
    });
  }
}
