
export const metadata = {
    title: 'Login Page',
    description: 'Generated by create next app',
  }

  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <h1>Isto vai aparecer em todas as páginas de login pq faz parte do layout do root</h1>
          {children}
        </body>
      </html>
    )
  }
  