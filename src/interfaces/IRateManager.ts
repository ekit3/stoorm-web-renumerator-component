import type {Job} from "../classes/salaryConfig";

export interface IRateManager {
  getRate(jobName: string): Job | undefined;

  getRateList(): Job[];

  getMinExperienceValue(): number;

  getMinTJMValue(): number;

  getSalary(selectedTjm: number): number;

  getJoinUsLink(): string
}
