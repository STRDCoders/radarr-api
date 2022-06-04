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
