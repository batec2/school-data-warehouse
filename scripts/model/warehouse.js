import sql from "mssql";

const Courses = () => {
  const table = new sql.Table("courses");
  table.create = true;
  table.columns.add("instructor", sql.Int, { nullable: false });
  table.columns.add("student", sql.Int, { nullable: false });
  table.columns.add("course", sql.Int, { nullable: false });
  table.columns.add("semester", sql.Int, { nullable: false });
  table.columns.add("year", sql.Int, { nullable: false });
  return table;
};

export default Courses;
