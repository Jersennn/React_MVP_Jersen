DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
    id SERIAL,
    workout TEXT,
    amount TEXT
);

INSERT INTO workouts(workout, amount)VALUES('bench', '1 warm up set, 3 working sets');
INSERT INTO workouts(workout, amount)VALUES('incline dubmbell press', '1 warm up set, 3 working sets increasing weight each set');
