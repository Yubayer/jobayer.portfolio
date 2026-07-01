import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }) {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
