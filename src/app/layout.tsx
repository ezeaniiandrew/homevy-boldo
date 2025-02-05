import "./globals.css";

export const metadata = {
  title: "Boldo",
  description: "Homevy Tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="w-full max-w-[1440px] relative">{children}</main>
      </body>
    </html>
  );
}
