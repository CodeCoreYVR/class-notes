SELECT *
FROM students
INNER JOIN projects ON projects.student_id = students.id
ORDER BY students.id;

SELECT students.*, COUNT(projects.id) AS total
FROM students
INNER JOIN projects ON projects.student_id = students.id
GROUP BY students.id;

SELECT students.*
FROM students
INNER JOIN enrolments ON enrolments.student_id = students.id
INNER JOIN courses ON enrolments.course_id = courses.id
WHERE courses.title = 'Up-sized hybrid project';
