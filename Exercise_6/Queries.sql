SELECT Title, International_sales, Domestic_sales
FROM Movies JOIN Boxoffice
    ON Id=Movie_id;

SELECT Title, International_sales, Domestic_sales
FROM Movies JOIN Boxoffice
    ON Id=Movie_id
WHERE International_sales > Domestic_sales;

SELECT Title, Rating
FROM Movies JOIN Boxoffice
    ON Id=Movie_id
ORDER BY Rating DESC;