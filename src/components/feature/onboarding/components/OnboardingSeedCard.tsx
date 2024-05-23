import { getFutureDate } from '@/utils/date';
import SeedCard from '../../seed/SeedCard';

const seedList = [
  {
    id: 1,
    endDate: getFutureDate(3),
    seedName: '1KG 감량하기',
    routineInfos: [
      {
        value: '매일 아침에 물 마시기',
      },
      {
        value: '8시 이후에 제발 먹지 말기!',
      },
    ],
    completedRoutineCount: 4,
    cheeringCount: 23,
    seedState: 'SEED' as const,
    mode: 'active' as const,
  },
  {
    id: 2,
    endDate: getFutureDate(0),
    seedName: '좋은 언어 장착하기',
    routineInfos: [
      {
        value: '부정적인 말 사용하지 않기',
      },
      {
        value: '빛의 얼굴로 지내기',
      },
    ],
    completedRoutineCount: 1,
    cheeringCount: 184,
    seedState: 'FRUITS' as const,
    mode: 'inactive' as const,
  },
];

const OnboardingSeedCard = () => {
  return (
    <section className="flex flex-col gap-4 mt-8">
      {seedList.map((seed) => {
        return (
          <SeedCard mode={seed.mode} key={seed.id}>
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
    </section>
  );
};

export default OnboardingSeedCard;
