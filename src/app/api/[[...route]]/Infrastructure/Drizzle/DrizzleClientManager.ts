import { PgTransaction } from "drizzle-orm/pg-core";
import drizzle from "./DrizzleClient";
import { IDataAccessClientManager } from "@/app/api/[[...route]]/Infrastructure/shared/IDataAccessClientManager";
import { PostgresJsQueryResultHKT } from "drizzle-orm/postgres-js";
import { ExtractTablesWithRelations } from "drizzle-orm";

type Client =
  | typeof drizzle
  | PgTransaction<
      PostgresJsQueryResultHKT,
      typeof import("../../../../../../drizzle/schema"),
      ExtractTablesWithRelations<
        typeof import("../../../../../../drizzle/schema")
      >
    >;

export class DrizzleClientManager implements IDataAccessClientManager<Client> {
  private client: Client = drizzle;

  setClient(client: Client): void {
    this.client = client;
  }

  getClient() {
    return this.client;
  }
}
