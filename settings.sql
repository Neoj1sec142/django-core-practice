-- settings.sql
CREATE DATABASE api;
CREATE USER apiuser WITH PASSWORD 'api';
GRANT ALL PRIVILEGES ON DATABASE api TO apiuser;