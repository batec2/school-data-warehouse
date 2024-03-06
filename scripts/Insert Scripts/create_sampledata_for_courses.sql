USE [school-data-warehouse]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE InsertRandomCourses
AS
BEGIN
    DECLARE @FacultiesAndDepartments TABLE (
        Faculty VARCHAR(50),
        Department VARCHAR(50)
    )

    INSERT INTO @FacultiesAndDepartments (Faculty, Department)
    VALUES
    ('arts & science', 'biology'),
    ('arts & science', 'physics'),
    ('arts & science', 'chemistry'),
    ('arts & science', 'mathematics'),
    ('arts & science', 'psychology'),
    ('arts & science', 'computer science'),
    ('arts & science', 'anthropology'),
    ('arts & science', 'economics'),
    ('arts & science', 'political sciences'),
    ('fine arts & culture', 'art'),
    ('fine arts & Culture', 'communications'),
    ('fine arts & culture', 'english'),
    ('health studies', 'Human Health'),
    ('health studies', 'health systems'),
    ('health studies', 'physical sciences'),
    ('health studies', 'child & youth care'),
    ('nursing', 'nursing'),
    ('nursing', 'professional nursing'),
    ('business', 'accounting'),
    ('business', 'finance'),
    ('business', 'international business'),
    ('business', 'management'),
    ('continuing educationg', 'early learning')

    DECLARE @Universities TABLE (
        University VARCHAR(50)
    )

    INSERT INTO @Universities (University)
    VALUES
    ('macewan'),
    ('uoa'),
    ('uoc'),
    ('nait'),
    ('sait'),
    ('concordia')

    DECLARE @RandomIndexFaculty INT
    DECLARE @RandomIndexUniversity INT

    DECLARE @Department VARCHAR(50)
    DECLARE @Faculty VARCHAR(50)
    DECLARE @University VARCHAR(50)

    DECLARE @RowCount INT = 1
    DECLARE @MaxRows INT = 20000 -- Change this to the desired number of rows

    WHILE @RowCount <= @MaxRows
    BEGIN
        SELECT @RandomIndexFaculty = RAND() * (SELECT COUNT(*) FROM @FacultiesAndDepartments)
        SELECT @RandomIndexUniversity = RAND() * (SELECT COUNT(*) FROM @Universities)

        SELECT TOP 1 @Department = Department, @Faculty = Faculty FROM @FacultiesAndDepartments ORDER BY NEWID()
        SELECT TOP 1 @University = University FROM @Universities ORDER BY NEWID()

        INSERT INTO courses (department, faculty, university)
        VALUES (@Department, @Faculty, @University)

        SET @RowCount = @RowCount + 1
    END
END
