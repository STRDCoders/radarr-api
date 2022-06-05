import axios from "axios";
import { Constants } from "../utils/constants";
import https from "https";
import { RadarrQueueRecord } from "../model/RadarrQueueRecord";

export class RadarrWebClient {
  private axiosClient;

  constructor(
    baseUrl: string,
    baseApiPath: string,
    apiKey: string,
    selfSignedSSL: boolean = false,
    timeout: number = 3000
  ) {
    if (baseApiPath.charAt(0) !== "/" && baseUrl.charAt(baseUrl.length - 1) !== "/") {
      baseApiPath = "/" + baseApiPath;
    }
    this.axiosClient = axios.create({
      baseURL: `${baseUrl}${baseApiPath}`,
      timeout: timeout,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": "application/json",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: "application/json",
      },
      params: {
        apiKey: apiKey,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: !selfSignedSSL,
      }),
    });
  }

  async getDownloadQueue(
    page: number,
    pageSize?: number,
    errorCallback?: (error: any) => any
  ): Promise<RadarrQueueRecord[]> {
    const response = await this.axiosClient
      .get(`queue?page=${page}&pageSize=${Constants.radarr.queuePageSize(pageSize)}`)
      .catch((error) => {
        if (errorCallback) {
          errorCallback(error);
        }
      });
    return response?.data.records;
  }
}
