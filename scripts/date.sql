USE [school-data-warehouse]
GO

/****** Object:  Table [dbo].[date]    Script Date: 2024-02-28 12:43:58 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[date](
	[semester] [nvarchar](50) NOT NULL,
	[year] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_date] PRIMARY KEY CLUSTERED 
(
	[semester] ASC,
	[year] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


