import { Client } from "ts-postgres";

export class DBConnection {
  client = new Client({
    host: "relationsdb.cghkj3llurod.eu-west-1.rds.amazonaws.com",
    user: "MasterUser",
    password: "W1L0ck2020",
  });

  async testQuery() {
    debugger;
    await this.client.connect();

    var result = this.client.query("Select * from dbo.Relations");

    console.log(result);
  }
}
