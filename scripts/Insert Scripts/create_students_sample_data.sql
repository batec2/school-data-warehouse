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
    ('accounting'),
    ('finance'),
    ('anthropology'),
    ('economics'),
    ('political sciences'),
    ('art'),
    ('child & youth care'),
    ('biology'),
    ('physics'),
    ('chemistry'),
    ('mathematics'),
    ('computer science'),
    ('humanities'),
    ('design'),
    ('communications'),
    ('human health'),
    ('health systems'),
    ('early learning'),
    ('international business'),
    ('music'),
    ('management'),
    ('nursing'),
    ('social work'),
    ('psychology'),
    ('physical sciences'),
    ('professional nursing')

    DECLARE @GenderOptions TABLE (
        gender NVARCHAR(10)
    )

    INSERT INTO @GenderOptions (gender)
    VALUES
    ('male'),
    ('female'),
    ('other')

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
