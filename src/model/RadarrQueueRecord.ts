export interface RadarrQueueRecord {
  id: number;
  movieId?: number;
  title: string;
  timeleft: string;
  sizeleft: number;
  size: number;
  status: MediaDownloadQueueItemClientStatus;
  trackedDownloadStatus: MediaDownloadQueueItemTrackedStatus;
  languages?: Language[];
}

export enum MediaDownloadQueueItemClientStatus { // status for radarr
  paused = "paused",
  downloading = "downloading",
  completed = "completed",
}

export enum MediaDownloadQueueItemTrackedStatus { // trackedDownloadStatus for radarr
  warning = "warning",
  ok = "ok",
  error = "error",
}

export interface Language {
  id: number;
  name?: string;
}
