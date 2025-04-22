import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsletterSignup from '../ui/NewsletterSignup';

interface LayoutProps {
  children: ReactNode;
  showNewsletter?: boolean;
}

const Layout = ({ children, showNewsletter = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {showNewsletter && <NewsletterSignup />}
      <Footer />
    </div>
  );
};

export default Layout;
