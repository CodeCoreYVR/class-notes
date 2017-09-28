SELECT first_name, last_name, id FROM students WHERE first_name='TOM';

SELECT * FROM students WHERE age > 40;

SELECT * FROM students WHERE registration_date >= CURRENT_DATE - 20;

SELECT * FROM students WHERE registration_date BETWEEN '2017/09/08' AND '2017/09/28';

SELECT * FROM students WHERE age < 20 OR age > 40;

SELECT * FROM students WHERE age IS NULL OR age < 20;

SELECT * FROM students WHERE last_name LIKE '%n';

SELECT * FROM students WHERE last_name ILIKE '%R%';

SELECT * FROM students WHERE last_name LIKE '%nn%' OR first_name LIKE '%nn%';

SELECT * FROM students WHERE age BETWEEN 20 AND 40;

SELECT * FROM students WHERE registration_date BETWEEN (CURRENT_DATE - 25) AND (CURRENT_DATE - 20);

SELECT * FROM students
WHERE registration_date BETWEEN (CURRENT_DATE - 25) AND (CURRENT_DATE - 20)
ORDER BY age ASC, first_name DESC;

SELECT * FROM students
WHERE first_name ILIKE 'ke%'
LIMIT 10;

SELECT * FROM students
ORDER BY age
LIMIT 10
OFFSET 20;

SELECT * FROM students
WHERE age > 25
LIMIT 20
OFFSET 20;


SELECT COUNT(*) FROM students;

SELECT COUNT(*) FROM students WHERE age > 25;

SELECT COUNT(*) AS student_count FROM students WHERE age > 25;

SELECT SUM(age) FROM students;

SELECT AVG(age) FROM students;

SELECT AVG(age) FROM students WHERE registration_date > '2017-01-01';

SELECT ROUND(AVG(age)) FROM students WHERE registration_date > '2017-01-01';

SELECT age, COUNT(age) AS average_age
FROM students
GROUP BY age
ORDER BY average_age DESC;

UPDATE students
SET email='you@me.com', age=35
WHERE ID=265;

SELECT * FROM students WHERE ID=265;

DELETE FROM students WHERE id=332;
SELECT * FROM students WHERE id=332;
