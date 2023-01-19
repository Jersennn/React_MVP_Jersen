DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
    id SERIAL,
    workout TEXT,
    amount TEXT
);

INSERT INTO workouts(workout, amount)VALUES('bench', '4 sets, 10 reps');