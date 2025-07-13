'use client'
import Link from 'next/link';
import { ReactNode, MouseEvent, ComponentProps } from 'react';
import { useRouter } from 'next/navigation';

interface SmoothLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  href: string;
  children: ReactNode;
}

const SmoothLink = ({ href, children, ...props }: SmoothLinkProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Handle home/logo click - scroll to top
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Clean URL (remove hash)
      router.replace(window.location.pathname, { scroll: false });
      return;
    }

    // Handle other section links
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL with hash
      router.replace(`${window.location.pathname}${href}`, { scroll: false });
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmoothLink;