import { Typography } from '../common/typography/Typography';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const SeedCreateLayout = ({ title, description, children }: Props) => {
  return (
    <div className=" flex flex-col mt-2 w-full text-white">
      <div className="mt-2 mb-16">
        <Typography type="title1">{title}</Typography>
        <Typography type="heading3">{description}</Typography>
      </div>

      {children}
    </div>
  );
};

export default SeedCreateLayout;
