-- Создание пользователя базы данных (если он еще не создан)
DO $$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'bob') THEN
      CREATE USER bob WITH PASSWORD 'bob';
END IF;
END
$$;

-- Создание базы данных (если она не создана)
DO $$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'fitness') THEN
      CREATE DATABASE fitness;
END IF;
END
$$;

-- Предоставление всех прав пользователю bob на базу данных
GRANT ALL PRIVILEGES ON DATABASE fitness TO bob;

-- Предоставление прав на схему public
GRANT ALL PRIVILEGES ON SCHEMA public TO bob;
