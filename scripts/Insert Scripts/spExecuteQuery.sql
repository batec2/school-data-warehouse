CREATE OR ALTER PROC spExecuteQuery
@query NVARCHAR(max)
as
BEGIN
  exec(@query)
END