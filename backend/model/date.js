import sql from "mssql";

const SemesterYear = () => {
  const table = new sql.Table("date");
  table.create = true;
  table.columns.add("semester_year_id", sql.Int, { nullable: false });
  table.columns.add("semester", sql.NVarChar(50), { nullable: false });
  table.columns.add("year", sql.NVarChar(50), { nullable: false });
  return table;
};

export default SemesterYear;
