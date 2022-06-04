import axios from "axios";
import { Constants } from "../utils/constants";
import https from "https";
import { RadarrQueueRecord } from "../model/RadarrQueueRecord";

export class RadarrWebClient {
  private axiosClient;

  constructor(baseUrl: string, timeout: number = 3000, apiKey: string, selfSignedSSL: boolean = false) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
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
        rejectUnauthorized: selfSignedSSL,
      }),
    });
  }

  async getDownloadQueue(page: number, pageSize?: number): Promise<RadarrQueueRecord[]> {
    const response = await this.axiosClient.get(
      `queue?page=${page}pageSize=${Constants.radarr.queuePageSize(pageSize)}`
    );
    return response.data.records;
  }
}
