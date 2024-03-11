import sql from "mssql";

const Warehouse = () => {
  const table = new sql.Table("warehouse");
  table.create = true;
  table.columns.add("instructor", sql.Int, { nullable: false });
  table.columns.add("student", sql.Int, { nullable: false });
  table.columns.add("course", sql.Int, { nullable: false });
  table.columns.add("semester", sql.VarChar(50), { nullable: false });
  table.columns.add("year", sql.VarChar(50), { nullable: false });
  return table;
};

export default Warehouse;
