import { Storm } from "./implementations/storm";
import type { RateManager } from "./rateManager";
import type {Company} from "../enums/company";

export class RateManagerFactory {
  static create(type: Company): RateManager {
    return new Storm();
  }
}
