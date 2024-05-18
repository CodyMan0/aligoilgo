import RainDrop from '@/assets/icon/RainDrop';

type RainProps = {
  position: { x: string; y: string };
  size: number;
};

const Rain = ({ position, size }: RainProps) => {
  return (
    <span className={`absolute ${position.x} ${position.y}`}>
      <RainDrop width={size} />
    </span>
  );
};

export default Rain;
