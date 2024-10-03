INSERT INTO users (telegram_user_id, fatsecret_user_id, password) VALUES
  (123456789, 987654321, 'password1'),
  (223456789, 887654321, 'password2'),
  (323456789, 787654321, 'password3');

INSERT INTO videos (title, description, cover, video_url, duration) VALUES
  ('Video 1', 'Description 1', 'cover1.jpg', 'http://video1.url', 120),
  ('Video 2', 'Description 2', 'cover2.jpg', 'http://video2.url', 240),
  ('Video 3', 'Description 3', 'cover3.jpg', 'http://video3.url', 180);

INSERT INTO user_parameters (user_id, age, from_weight, current_weight, desired_weight, gender, height, activity) VALUES
  (1, 25, 80.5, 78.0, 75.0, 1, 180, 1.2),
  (2, 30, 70.0, 68.0, 65.0, 0, 165, 1.5),
  (3, 28, 90.0, 85.0, 80.0, 1, 175, 1.3);

INSERT INTO user_calendar (user_id, date) VALUES
  (1, '2021-01-01'),
  (1, '2021-01-02'),
  (1, '2021-01-03'),
  (2, '2021-01-01'),
  (2, '2021-01-02'),
  (3, '2021-01-01');
