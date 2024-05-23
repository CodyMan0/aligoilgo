import * as yup from 'yup';

export const DELAY_SECOND = 4000;
export const TOOLTIP_DELAY_SECOND = 3000;



export const seedSchema = yup.object({
  seed: yup.string().required('열매를 맺을 씨앗(목표)을/를 입력해주세요'),
  routines: yup.array().of(
    yup.object().shape({
      value: yup.string().required('루틴은 필수예요'),
    }),
  ).required(),
  endDate: yup.string().required('목표 달성일을 지정해주세요'),
});


export const FUNNEL_LIST = ['seed','routines','duration'] as const


export const MIN_DATE = 2;
export const MAX_DATE = 31;