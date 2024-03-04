SELECT *, COUNT(Title)
FROM Movies
GROUP BY Director;

SELECT Director, sum(Domestic_sales + International_Sales) as Total_Sales
FROM Movies
LEFT JOIN Boxoffice ON Id = Movie_ID
GROUP BY Director;