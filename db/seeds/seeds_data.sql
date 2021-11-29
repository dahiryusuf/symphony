-- -- Users table seeds here (Example)
INSERT INTO users (first_name, last_name, is_admin, email, password) VALUES ('Alice', 'Wonderland',false,'alicewonder@gmail.com','12345');
INSERT INTO users (first_name, last_name, is_admin, email, password) VALUES ('Bob', 'Smith',true,'Bobsmith@gmail.com','12345');
INSERT INTO users (first_name, last_name, is_admin, email, password) VALUES ('Wonder', 'Wanda',false,'wonder@gmail.com','12345');


INSERT INTO items (name,
  description,
  image,
  price,
  admin_id,
  is_sold,
  is_deleted)
  VALUES (
'Steinberg Piano',
'Black. Attractive cabinet with polished wood and grand styling
88 key graded hammer action velocity sensitive
128-note polyphony with sound effects engaged.
Voice mode: Main, multi-layer for 4 voices
122 selected voices',
'https://m.media-amazon.com/images/I/61GrJRwTWVS._AC_SL1200_.jpg',
5000,
1,
true,
false
);

INSERT INTO items (name,
  description,
  image,
  price,
  admin_id,
  is_sold,
  is_deleted)
  VALUES (
'Fender Mustang',
'Black. Attractive cabinet with polished wood and grand styling
88 key graded hammer action velocity sensitive
128-note polyphony with sound effects engaged.
Voice mode: Main, multi-layer for 4 voices
122 selected voices',
'https://www.sefiles.net/merchant/5582/images/zoom/IMG_1162.jpg',
1100,
1,
false,
false
);

INSERT INTO items (name,
  description,
  image,
  price,
  admin_id,
  is_sold,
  is_deleted)
  VALUES (
'Pearl Drums',
'Black. Attractive cabinet with polished wood and grand styling
88 key graded hammer action velocity sensitive
128-note polyphony with sound effects engaged.
Voice mode: Main, multi-layer for 4 voices
122 selected voices',
'https://sc1.musik-produktiv.com/pic-010068549xxl/pearl-export-22-smokey-chrome-inkl-sabian-sbr-beckenset.jpg',
2500,
1,
false,
false
);

INSERT INTO favourites (item_id, user_id)
VALUES (1, 1),
(2, 2),
(3, 3);

INSERT INTO chats (item_id, buyer_id )
VALUES (1, 1),
(2, 2),
(3, 3);

INSERT INTO messages
VALUES (1, 1),
(2, 2),
(3, 3);