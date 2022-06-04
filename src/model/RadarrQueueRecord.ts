import { MediaDownloadQueueItemClientStatus, MediaDownloadQueueItemTrackedStatus } from "./RadarrQueueStatus";

export interface RadarrQueueRecord {
  title: string;
  timeleft: string;
  status: MediaDownloadQueueItemClientStatus;
  trackedDownloadStatus: MediaDownloadQueueItemTrackedStatus;
}
