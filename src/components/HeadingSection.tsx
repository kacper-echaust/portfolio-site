type Props = {
  text: string;
};

const HeadingSection = ({ text }: Props) => {
  return (
    <h3 className="uppercase border-b border-white w-full text-white text-4xl py-6 mb-12">
      {text}
    </h3>
  );
};

export { HeadingSection };
