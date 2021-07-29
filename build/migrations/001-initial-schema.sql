-- Up

CREATE TABLE IF NOT EXISTS User(
  id INTEGER PRIMARY KEY,
  userName TEXT NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL
);

-- Creating user by default....
INSERT OR REPLACE INTO User (id, userName, password, name, type) VALUES
(1, "automobile", "$2b$10$KpGPmpBC2sRO2YuQxqCWG.QjYvC3OL2hQFJuJB968bCzN/rMHG7Pq", "Admin", "admin");
-- Down
