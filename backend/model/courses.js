import sql from "mssql";

const Courses = () => {
  const table = new sql.Table("courses");
  table.create = true;
  table.columns.add("course", sql.Int, { nullable: false });
  table.columns.add("department", sql.NVarChar(50), { nullable: false });
  table.columns.add("faculty", sql.NVarChar(50), { nullable: false });
  table.columns.add("university", sql.NVarChar(50), { nullable: false });
  return table;
};

export default Courses;
