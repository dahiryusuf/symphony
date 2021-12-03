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
'https://www.chuppspianos.com/wp-content/uploads/2018/09/Kurtzmann-Co-Louis-XV-Style-Art-Case-Grand-Piano-67711-Circassian-Walnut.jpg',
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
'Mendini By Cecilio Violin',
'Great Violin For Beginners: The beginner violin is an ideal stringed musical instrument for any student who has dreams of playing music. The set includes all the necessities to start learning how to play.',
'https://viewthevibe.com/wp-content/uploads/2020/06/Violin.jpg',
600,
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
'Ibanez 4 String Bass Guitar',
'Fast, slim Maple neck
Compact, light-weight Body
Dynamic P pickup
Short Scale 28. 6. great condition. selling because I found a new bass guitar"
',
'https://makingmusicmag.com/wp-content/uploads/2018/10/bass-guitar-1841186_1280.jpg',
1200,
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
'The Masterworks Custom Creative Process.
Letting you explore literally hundreds of options in sculpting your own unique drum build and look, Masterworks Custom gives you the freedom to customize a sound that is completely your own. The creative process begins with crafting your ideal shell construction from our finest hand selected shell veneers.',
'https://cdn.shopify.com/s/files/1/1422/9358/products/VK-VAN-KLEEF-DRUMS-7EMPEST-TEMPEST-CAST-ALUMINIUM-DANNY-CAREY-SET-TOOL-SET-UP-DRUM-KIT-BLACK-POWDER-COAT-DRUMAZON_01_1000x.jpg?v=1585600757',
3120,
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
'Alto Saxophone',
'Yamaha alto saxophone YAS-21. Just been through maintenance. Made in Japan, beautiful sound. Great condition. Box included.',
'https://i.imgur.com/0fIFklo.jpeg',
900,
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
'Trumpet',
'Great condition trumpet. Silver model. Made in Japan. Comes in original padded hard case and with original mouth piece.
Could use a bit of polishing (blemishes are just from tarnish of the silver)',
'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
900,
2,
false,
false
);

INSERT INTO favourites (item_id, user_id)
VALUES (1, 1),
(2, 1),
(3, 2);

INSERT INTO chats (item_id, buyer_id )
VALUES (1, 1),
(2, 1),
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
