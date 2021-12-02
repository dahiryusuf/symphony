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
2,
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
'Steinberg Piano',
'Black. Attractive cabinet with polished wood and grand styling
88 key graded hammer action velocity sensitive
128-note polyphony with sound effects engaged.
Voice mode: Main, multi-layer for 4 voices
122 selected voices',
'https://m.media-amazon.com/images/I/61GrJRwTWVS._AC_SL1200_.jpg',
5000,
2,
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
'Steinberg Piano',
'Black. Attractive cabinet with polished wood and grand styling
88 key graded hammer action velocity sensitive
128-note polyphony with sound effects engaged.
Voice mode: Main, multi-layer for 4 voices
122 selected voices',
'https://m.media-amazon.com/images/I/61GrJRwTWVS._AC_SL1200_.jpg',
5000,
2,
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
'Fender Mustang',
'Black. Attractive cabinet with polished wood and grand styling
88 key graded hammer action velocity sensitive
128-note polyphony with sound effects engaged.
Voice mode: Main, multi-layer for 4 voices
122 selected voices',
'https://www.sefiles.net/merchant/5582/images/zoom/IMG_1162.jpg',
1100,
2,
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
INSERT INTO items (name,
  description,
  image,
  price,
  admin_id,
  is_sold,
  is_deleted)
  VALUES (
'Acoustic Guitar',
'Suitable for beginners: As an acoustic guitar designed for beginners, it is easy to use and play. The 38-inch guitar is very suitable for use in classes, recitals, band rehearsals, stage performances or practice at home. High-quality material: This acoustic guitar includes 6 strings. The strings of these guitars are made of high-quality metal, with good sound quality and stable pitch. ',
'https://images.squarespace-cdn.com/content/v1/5b7d8ac7697a988b951bdc95/1611728210677-016BGGS79ZRHB96CKQS3/image-9.jpg?format=2500w',
1000,
2,
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
'Triumph Flute',
'Advanced SplIt E mechanism design for a easy play high E even a beginner
Advanced OFFSET line design for a comfortable and easy playing for beginner or student
Advanced flute mouthpiece embouchure design for easy play for student and beginner
Durable lightweight flute case protects flute against the physical damage.',
'https://media.istockphoto.com/photos/silver-flute-with-path-picture-id172142833?k=20&m=172142833&s=612x612&w=0&h=8k3h43N84O9dDz-uQRtjCs6sgEdLV_CihalDufDuIZc=',
800,
1,
false,
false
);

INSERT INTO favourites (item_id, user_id)
VALUES (1, 1),
(2, 1),
(3, 2);

INSERT INTO chats (item_id, buyer_id )
VALUES (1, 2),
(2, 2),
(3, 3);

INSERT INTO messages
VALUES (DEFAULT, 1, 'Hey', 2),
(DEFAULT, 1, 'Yo', 1),
(DEFAULT, 1, 'give me a sweet deal fam', 2),
(DEFAULT, 1, 'nah', 1),
(DEFAULT, 1, ':(', 2),
(DEFAULT, 1, 'ill trade my ps3', 1),
(DEFAULT, 1, 'great condition!', 1),
(DEFAULT, 1, 'sir plz', 2),
(DEFAULT, 1, 'this is a music site', 2),
(DEFAULT, 1, '>:(', 1);
