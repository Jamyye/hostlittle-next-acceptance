export const metadata = {
  title: "Host Little Next.js Acceptance",
  description: "A tiny production-shaped Host Little App Hosting canary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
