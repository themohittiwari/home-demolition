import Header from "./Header";
import Footer from "./Footer";
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18012718476"/>
       <Script id="google-ads-global-site-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18012718476');
        `}
      </Script>
    </div>
  );
}

