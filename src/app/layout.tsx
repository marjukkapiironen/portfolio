import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "marjukka piironen",
  description: "My personal portfolio webpage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#21202c" />
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
