USE [school-data-warehouse]
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


