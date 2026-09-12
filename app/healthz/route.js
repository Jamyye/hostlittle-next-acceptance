export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    status: "ok",
    runtime: "nextjs",
    marker: "native-kernel6-first-20260912",
    sourceRevision: process.env.HOSTLITTLE_SOURCE_REVISION ?? null,
    releaseId: process.env.HOSTLITTLE_RELEASE_ID ?? null,
  }, { headers: { "cache-control": "no-store" } });
}
