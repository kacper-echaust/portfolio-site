type Props = {
  onClick?: () => void;
  text: string;
  className?: string;
  link?: string;
};

const CustomButton = ({ onClick, text, className, link }: Props) => {
  return (
    <button
      className={`py-4 w-48 cursor-pointer text-white border border-white ${className}`}
      onClick={onClick}
    >
      <a className="w-full h-full" href={link}>
        {text}
      </a>
    </button>
  );
};

export { CustomButton };
