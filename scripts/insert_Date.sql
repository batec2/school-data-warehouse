USE [school-data-warehouse]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DECLARE @startYear INT = 1993;
DECLARE @endYear INT = 2024;

WHILE @startYear <= @endYear
BEGIN
    INSERT INTO [dbo].[date] (semester, year)
    VALUES 
        ('fall', CAST(@startYear AS NVARCHAR(4))),
        ('winter', CAST(@startYear AS NVARCHAR(4))),
        ('spring/summer', CAST(@startYear AS NVARCHAR(4)));

    SET @startYear = @startYear + 1;
END;
