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
    ('Arts & Science', 'Biology'),
    ('Arts & Science', 'Physics'),
    ('Arts & Science', 'Chemistry'),
    ('Arts & Science', 'Mathematics'),
    ('Arts & Science', 'Psychology'),
    ('Arts & Science', 'Computer Science'),
    ('Arts & Science', 'Anthropology'),
    ('Arts & Science', 'Economics'),
    ('Arts & Science', 'Political Sciences'),
    ('Fine Arts & Culture', 'Art'),
    ('Fine Arts & Culture', 'Communications'),
    ('Fine Arts & Culture', 'English'),
    ('Health Studies', 'Human Health'),
    ('Health Studies', 'Health Systems'),
    ('Physical Sciences', 'Physical Sciences'),
    ('Child & Youth Care', 'Child & Youth Care'),
    ('Nursing', 'Nursing'),
    ('Nursing', 'Professional Nursing'),
    ('Business', 'Accounting'),
    ('Business', 'Finance'),
    ('Business', 'International Business'),
    ('Business', 'Management'),
    ('Continuing Education', 'Continuing Education'),
    ('Early Learning', 'Early Learning')

    DECLARE @Universities TABLE (
        University VARCHAR(50)
    )

    INSERT INTO @Universities (University)
    VALUES
    ('MacEwan'),
    ('UoA'),
    ('UoC'),
    ('NAIT'),
    ('SAIT'),
    ('Concordia')

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
