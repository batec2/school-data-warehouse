USE [school-data-warehouse-2]
GO

/****** Object:  Table [dbo].[courses]    Script Date: 2024-02-28 12:41:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



CREATE TABLE [dbo].[courses](
	[course] [int] NOT NULL,
	[department] [nvarchar](50) NOT NULL,
	[faculty] [nvarchar](50) NOT NULL,
	[university] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_courses] PRIMARY KEY CLUSTERED 
(
	[course] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[date](
	[semester_year_id] [int] NOT NULL,
	[semester] [nvarchar](50) NOT NULL,
	[year] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_date] PRIMARY KEY CLUSTERED 
(
	[semester] ASC,
	[year] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[instructors](
	[instructor] [int] NOT NULL,
	[faculty] [varchar](50) NULL,
	[rank] [varchar](50) NULL,
	[university] [varchar](50) NULL,
 CONSTRAINT [PK_instructors] PRIMARY KEY CLUSTERED 
(
	[instructor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[students](
	[student] [int] NOT NULL,
	[major] [nvarchar](50) NOT NULL,
	[gender] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_students] PRIMARY KEY CLUSTERED 
(
	[student] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[warehouse](
	[instructor] [int] NOT NULL,
	[student] [int] NOT NULL,
	[course] [int] NOT NULL,
	[semester] [nvarchar](50) NOT NULL,
	[year] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_warehouse] PRIMARY KEY CLUSTERED 
(
	[instructor] ASC,
	[student] ASC,
	[course] ASC,
	[semester] ASC,
	[year] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
