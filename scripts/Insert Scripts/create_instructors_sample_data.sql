USE [school-data-warehouse]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE GenerateRandomInstructors
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @FacultyOptions TABLE (
        Faculty NVARCHAR(50)
    )

    INSERT INTO @FacultyOptions (Faculty)
    VALUES
    ('Arts & Science'),
    ('Fine Arts & Culture'),
    ('Health Studies'),
    ('Nursing'),
    ('Business'),
    ('Continuing Education')

    DECLARE @RankOptions TABLE (
        Rank NVARCHAR(50)
    )

    INSERT INTO @RankOptions (Rank)
    VALUES
    ('Assistant'),
    ('Associate'),
    ('Senior'),
    ('Other')

    DECLARE @UniversityOptions TABLE (
        University NVARCHAR(50)
    )

    INSERT INTO @UniversityOptions (University)
    VALUES
    ('MacEwan'),
    ('UoA'),
    ('UoC'),
    ('NAIT'),
    ('SAIT'),
    ('Concordia')

    DECLARE @counter INT = 1
    DECLARE @RowCount INT

    WHILE @counter <= 20000
    BEGIN
        SELECT @RowCount = COUNT(*) FROM @FacultyOptions
        IF @RowCount > 0
        BEGIN
            INSERT INTO instructors(faculty, rank, university)
            VALUES (
                (SELECT TOP 1 Faculty FROM @FacultyOptions ORDER BY NEWID()),
                (SELECT TOP 1 Rank FROM @RankOptions ORDER BY NEWID()),
                (SELECT TOP 1 University FROM @UniversityOptions ORDER BY NEWID())
            )
        END

        SET @counter = @counter + 1
    END
END
