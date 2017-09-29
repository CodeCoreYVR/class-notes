SELECT first_name, COUNT(first_name) as occurances
FROM students
GROUP BY first_name
ORDER BY occurances DESC;
