/* Campos sugeridos para agregar a tabla user*/

ALTER TABLE user ADD nombre VARCHAR(50);
ALTER TABLE user ADD apellido VARCHAR(50);
ALTER TABLE user ADD telefono VARCHAR(15);
ALTER TABLE user ADD email VARCHAR(50);
ALTER TABLE user ADD passwordHash VARCHAR(32);
ALTER TABLE user ADD registeredAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
