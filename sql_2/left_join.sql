SELECT *
FROM students
LEFT JOIN projects ON projects.student_id = students.id
WHERE title IS NULL;

SELECT course_id, ROUND(AVG(score)), courses.title
FROM enrolments
INNER JOIN courses ON courses.id = enrolments.course_id
GROUP BY course_id, courses.title;

SELECT courses.id, courses.title, ROUND(AVG(score))
FROM courses
INNER JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.id;

SELECT course_id, courses.title, COUNT(student_id) as number_of_students
FROM enrolments
INNER JOIN courses ON courses.id = enrolments.course_id
GROUP BY course_id, courses.title
ORDER BY number_of_students DESC;
