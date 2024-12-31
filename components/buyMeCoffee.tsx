import Link from 'next/link';
import { Coffee } from 'lucide-react';

interface BuyMeCoffeeLinkProps {
  className?: string;
}

const BuyMeCoffeeLink: React.FC<BuyMeCoffeeLinkProps> = ({ className }) => {
  return (
    <Link
      href="https://buymeacoffee.com/skiroyjenkins"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors ${className}`}
    >
      <Coffee size={20} />
      <span>Buy me a Coffee</span>
    </Link>
  );
};

export default BuyMeCoffeeLink;
