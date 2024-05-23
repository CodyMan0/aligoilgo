import { useNavigate } from 'react-router-dom';

import { PreviewSeedType } from '@/types/target/type';
import SeedCard from './SeedCard';
import SeedEmptyCard from './SeedEmptyCard';

const SeedList = ({ seeds, isActive }: { seeds: PreviewSeedType[]; isActive: boolean }) => {
  const navigate = useNavigate();
  return (
    <ul className="flex flex-col gap-6">
      {seeds?.length === 0 ? (
        <SeedEmptyCard isActive={isActive} />
      ) : (
        <>
          {seeds.map((seed) => {
            return (
              <SeedCard
                mode={isActive ? 'active' : 'inactive'}
                key={seed.id}
                onClick={() => navigate(`/seed/${seed.id}`)}
              >
                <SeedCard.Header endDate={seed.endDate} />
                <SeedCard.Background />
                <SeedCard.Body
                  seedName={seed.seedName}
                  routineInfos={seed.routineInfos}
                  seedState={seed.seedState}
                />
                <SeedCard.Footer likes={seed.cheeringCount} />
              </SeedCard>
            );
          })}
        </>
      )}
    </ul>
  );
};

export default SeedList;
