CREATE TABLE IF NOT EXISTS workouts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    reps INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    date DATE NOT NULL,
    UNIQUE(name, date)  -- Ensures a workout with the same name & date is unique
);

INSERT INTO workouts (name, reps, weight, date) VALUES
    ('squats', 10, 225, '2021-01-01'),
    ('deadlifts', 5, 315, '2021-01-02'),
    ('bench press', 5, 225, '2021-01-03')
ON CONFLICT (name, date) DO NOTHING;  -- Prevents duplicate workouts for the same day
