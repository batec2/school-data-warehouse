-- EXEC PopulateWarehouse;

CREATE PROCEDURE PopulateWarehouse
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @Counter INT = 1

    -- Loop to insert records into the warehouse table
    WHILE @Counter <= 1000000
    BEGIN
        -- Get random values for instructor, student, and course from the respective tables
        DECLARE @InstructorID INT, @StudentID INT, @CourseID INT

        SELECT TOP 1 @InstructorID = [instructor] FROM [instructors] ORDER BY NEWID()
        SELECT TOP 1 @StudentID = [student] FROM [students] ORDER BY NEWID()
        SELECT TOP 1 @CourseID = [course] FROM [courses] ORDER BY NEWID()

        -- Get random semester and year values from the date table
        DECLARE @SemesterYearID INT

        SELECT TOP 1 @SemesterYearID = [semester_year_id] FROM [date] ORDER BY NEWID()

        DECLARE @Semester NVARCHAR(50), @Year NVARCHAR(50)

        SELECT @Semester = [semester], @Year = [year] FROM [date] WHERE [semester_year_id] = @SemesterYearID

        -- Insert record into the warehouse table
        INSERT INTO [warehouse] ([instructor], [student], [course], [semester], [year])
        VALUES (@InstructorID, @StudentID, @CourseID, @Semester, @Year)

        SET @Counter = @Counter + 1
    END
END
