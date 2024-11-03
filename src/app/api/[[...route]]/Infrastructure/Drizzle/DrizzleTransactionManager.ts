import { ITransactionManager } from "../../Application/shared/ITransactionManager";
import drizzle from "../Drizzle/DrizzleClient";
import { DrizzleClientManager } from "./DrizzleClientManager";
import { injectable, inject } from "tsyringe";

@injectable()
export class DrizzleTransactionManager implements ITransactionManager {
  constructor(
    @inject("IDataAccessClientManager")
    private clientManager: DrizzleClientManager
  ) {}

  async begin<T>(callback: () => Promise<T>): Promise<T | undefined> {
    return await drizzle.transaction(async (transaction) => {
      this.clientManager.setClient(transaction);

      const res = await callback();
      // リセット
      this.clientManager.setClient(drizzle);

      return res;
    });
  }
}
