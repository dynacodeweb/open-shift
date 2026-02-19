export const provideServices = ['nursing', 'personal_care'] as const;
export const weeklyWorkingHours = ['1-10', '11-25', '26-35', '36+'] as const;
export const startWorkingOptions = [
  'immediately',
  'within_the_next_2_weeks',
  'in_2_4_weeks',
  'later_than_4_weeks',
  'i_am_not_sure',
] as const;
export const reasonsForSupportWork = [
  'maximize_earnings',
  'be_my_own_boss',
  'to_do_meaningful_work_helping_others',
  'be_part_of_the_worker_community',
  'to_have_more_flexibility_in_my_work_life',
] as const;
export const mostImportantReason = [
  'be_my_own_boss',
  'to_do_meaningful_work_helping_others',
  'be_part_of_the_worker_community',
  'to_have_more_flexibility_in_my_work_life',
] as const;
export const role = ['admin', 'owner', 'nurse', 'user'] as const;
