import sql from "mssql";

const Date = () => {
  const table = new sql.Table("date");
  table.create = true;
  table.columns.add("semester", sql.NVarChar(50), { nullable: false });
  table.columns.add("year", sql.NVarChar(50), { nullable: false });
  return table;
};

export default Date;
