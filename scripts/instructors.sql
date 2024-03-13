USE [school-data-warehouse]
GO

/****** Object:  Table [dbo].[instructors]    Script Date: 2024-02-28 12:46:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
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


