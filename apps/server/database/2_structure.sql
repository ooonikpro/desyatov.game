CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    telegram_user_id BIGINT NOT NULL,
    fatsecret_user_id BIGINT
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    cover VARCHAR(255),
    video_url VARCHAR(255) NOT NULL,
    duration INTEGER NOT NULL
);

CREATE TABLE user_parameters (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    age INTEGER,
    from_weight FLOAT,
    current_weight FLOAT,
    desired_weight FLOAT,
    gender INTEGER,
    height FLOAT,
    activity FLOAT
);


CREATE TABLE user_calendar (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    date TIMESTAMP NOT NULL
);
