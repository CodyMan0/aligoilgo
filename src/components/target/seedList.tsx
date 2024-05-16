import { Suspense } from 'react';

import { PreviewSeedType } from '@/types/target/type';
import { checkActiveDuration } from '@/utils/date';
import { Spinner } from '../common/spinner/Spinner';
import SeedCard from './\bseedCard';
import TargetEmptyCard from './TargetEmptyCard';

// TODO : isEndDUration은 확장성을 고려하여 boolean보다 Constant Literal이 좋을 듯
const SeedList = ({ isActive, seeds }: { isActive: boolean; seeds: PreviewSeedType[] }) => {
  return (
    <ul className="flex flex-col gap-6 h-fit">
      <Suspense fallback={<Spinner />}>
        {seeds?.length === 0 ? (
          <TargetEmptyCard />
        ) : (
          <>
            {seeds.map((seed) => {
              const isState = checkActiveDuration(seed.endDate);
              return isState === isActive ? <SeedCard key={seed.id} {...seed} /> : null;
            })}
          </>
        )}
      </Suspense>
    </ul>
  );
};

export default SeedList;
