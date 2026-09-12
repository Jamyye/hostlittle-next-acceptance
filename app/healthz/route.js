export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    status: "ok",
    runtime: "nextjs",
    marker: "native-bootstrap-dispatch-repaired-20260911",
    sourceRevision: process.env.HOSTLITTLE_SOURCE_REVISION ?? null,
    releaseId: process.env.HOSTLITTLE_RELEASE_ID ?? null,
  }, { headers: { "cache-control": "no-store" } });
}
