import Rain from '@/components/common/rain';
import { useRoutineContext } from '@/context/RoutineContext';

const RainBackGround = () => {
  const { isRainOpen } = useRoutineContext();

  return (
    <>
      {isRainOpen && (
        <>
          <Rain size={14} position={{ x: 'left-[10px]', y: 'top-0' }} />
          <Rain size={26} position={{ x: 'right-[80px]', y: 'top-[10px]' }} />
          <Rain size={26} position={{ x: 'right-[200px]', y: 'top-[-100px]' }} />
          <Rain size={26} position={{ x: 'left-[100px]', y: 'top-[-80px]' }} />
          <Rain size={14} position={{ x: 'left-[20px]', y: 'top-[20px]' }} />
          <Rain size={26} position={{ x: 'left-[80px]', y: 'top-[80px]' }} />
          <Rain size={8} position={{ x: 'left-[140px]', y: 'top-[50px]' }} />
          <Rain size={8} position={{ x: 'right-[48px]', y: 'top-[10px]' }} />
          <Rain size={26} position={{ x: 'right-[80px]', y: 'top-[150px]' }} />
          <Rain size={14} position={{ x: 'left-[150px]', y: 'top-[130px]' }} />
          <Rain size={14} position={{ x: 'right-[150px]', y: 'top-[100px]' }} />
          <Rain size={26} position={{ x: 'left-[30px]', y: 'top-[200px]' }} />
          <Rain size={8} position={{ x: 'left-[200px]', y: 'top-[250px]' }} />
        </>
      )}
    </>
  );
};

export default RainBackGround;
