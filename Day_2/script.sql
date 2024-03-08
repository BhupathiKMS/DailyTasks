use `guvi_zen_class`;

INSERT INTO user 
(name, email) 
VALUES
    ("Abin","abin@test.com"),
    ("Bbin","bbin@test.com"),
    ("Cbin","cbin@test.com"),
    ("Dbin","dbin@test.com"),
    ("Ebin","ebin@test.com");
    
INSERT INTO attendance
(date, attendance, user_id)
VALUES
("March 03", true, 1),
("March 03", true, 2),
("March 03", true, 3),
("March 03", true, 5);

INSERT INTO attendance
(date, attendance, user_id)
VALUES
("March 03", false, 4);

select * from attendance;
select * from attendance;
select * from user join attendance where user.id = attendance.user_id;