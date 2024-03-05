import sql from "mssql";

const Students = () => {
  const table = new sql.Table("students");
  table.create = true;
  table.columns.add("major", sql.NVarChar(50), { nullable: false });
  table.columns.add("gender", sql.NVarChar(50), { nullable: false });
  return table;
};

export default Students;
