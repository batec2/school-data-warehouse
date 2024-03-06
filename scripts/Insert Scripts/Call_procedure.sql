USE [school-data-warehouse]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- this will generate the data for students table
EXEC GenerateRandomStudents;
-- this will generate the data form instructers table
EXEC GenerateRandomInstructors;
-- this will generate the data form courses table
<<<<<<< HEAD
EXEC InsertRandomCourses;
=======
EXEC GenerateRandomCourses;
-- generating warehouse
EXEC Popuulatewarehouse;
>>>>>>> 6a82f33 (generting warehouse)
