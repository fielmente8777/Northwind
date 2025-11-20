import { ArrowUpIcons } from "@/utils/icons";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  [key: string]: unknown;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center justify-center uppercase gap-2 w-fit px-10 py-3 bg-black text-white barlow font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:shadow-lg rounded-full ${className}`}
      {...props}
    >
      {label}
      <span>
        <ArrowUpIcons />
      </span>
    </Link>
  );
};

export default LinkButton;
