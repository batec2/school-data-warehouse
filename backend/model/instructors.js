import sql from "mssql";

const Instructors = () => {
  const table = new sql.Table("instructors");
  table.create = true;
  table.columns.add("faculty", sql.VarChar(50), { nullable: true });
  table.columns.add("rank", sql.VarChar(50), { nullable: true });
  table.columns.add("university", sql.VarChar(50), { nullable: true });
  return table;
};

export default Instructors;
