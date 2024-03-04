SELECT DISTINCT Building
FROM Employees
    LEFT JOIN Buildings ON Building=Building_name
WHERE Years_employed
NOT NULL;

SELECT *
FROM Buildings;

SELECT DISTINCT Building_name, Role
FROM Buildings
    LEFT JOIN employees ON building_name = building;