import { SeedStateType } from '../target/type';

export type UserStatusType = {
  totalUserCount: number;
  totalSeedCount: number;
};

export type OwnSeedType = {
  email: string;
  name: string;
  stateStatisticsList: StateStatisticsListType[];
};
type StateStatisticsListType = {
  state: SeedStateType;
  stateCount: number;
};

export type CheerUserResponseType = {
  cheerUsers: CheerUserListType[];
  cheerCount: number;
};

type CheerUserListType = {
  id: number;
  cheererInfo: { cheererName: string };
};
