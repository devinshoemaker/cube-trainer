-- OLL Groups
INSERT INTO oll_group (name)
VALUES ('Dot');
-- OLL's
INSERT INTO oll (name, oll_group_id)
VALUES (
    '3',
    (
      SELECT id
      FROM oll_group
      WHERE name = 'Dot'
    )
  );
-- OLL Scrambles
INSERT INTO oll_scramble (oll_id, scramble)
VALUES (
    (
      SELECT id
      FROM oll
      WHERE name = '3'
    ),
    E'r\' R2 U R\' U r U2 r\' U M\''
  );