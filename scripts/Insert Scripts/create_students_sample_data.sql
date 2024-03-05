USE [school-data-warehouse]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE GenerateRandomStudents
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @MajorOptions TABLE (
        major NVARCHAR(50)
    )

    INSERT INTO @MajorOptions (major)
    VALUES
    ('Accounting'),
    ('Finance'),
    ('Anthropology'),
    ('Economics'),
    ('Political Sciences'),
    ('Art'),
    ('Child & Youth care'),
    ('Biology'),
    ('Physics'),
    ('Chemistry'),
    ('Mathematics'),
    ('Computer Science'),
    ('Humanities'),
    ('Design'),
    ('Communications'),
    ('Human Health'),
    ('Health systems'),
    ('Early learning'),
    ('International Business'),
    ('Music'),
    ('Management'),
    ('Nursing'),
    ('Social Work'),
    ('Psychology'),
    ('Physical Sciences'),
    ('Professional Nursing')

    DECLARE @GenderOptions TABLE (
        gender NVARCHAR(10)
    )

    INSERT INTO @GenderOptions (gender)
    VALUES
    ('Male'),
    ('Female'),
    ('Other')

    DECLARE @counter INT = 1

    WHILE @counter <= 100000
    BEGIN
        INSERT INTO students(major,gender)
        VALUES (
            (SELECT TOP 1 major FROM @MajorOptions ORDER BY NEWID()),
            (SELECT TOP 1 gender FROM @GenderOptions ORDER BY NEWID())
        )

        SET @counter = @counter + 1
    END
END
