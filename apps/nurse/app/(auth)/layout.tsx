export default function PublicAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={
        'bg-card h-dvh w-full flex flex-col items-center justify-center px-4'
      }>
      {children}
    </main>
  );
}
