export class Constants {
  static readonly radarr = Object.freeze({
    default: Object.freeze({
      baseApiPath: "/api/v3",
      timeout: 3000,
    }),
    queuePageSize: (pageSize?: number) =>
      Number.isInteger(parseInt(process.env.SONARR_QUEUE_SIZE!!, 10))
        ? parseInt(process.env.SONARR_QUEUE_SIZE!!, 10)
        : Number.isInteger(pageSize)
        ? pageSize
        : 100,
  });
}
