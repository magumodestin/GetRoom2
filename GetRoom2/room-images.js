/* Online photos for each room type. Edit ONLY this file to change pictures.
   Each room takes the next photo in its type's list and loops back to the start,
   so the more photos you add per type, the fewer repeats you'll see.
   To add one: open a photo on unsplash.com -> right-click the photo -> "Copy image address",
   then paste just the part after "photo-" (up to the "?") into the list below.
   Open check-images.html to see which links work (green) and which are broken (red). */
const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const roomImages = {
  "Shared Room": [
    "1505693416388-ac5ce068fe85",
    "1560185127-6ed189bf02f4",
    "1616486338812-3dadae4b4ace",
    "1522771739844-6a9f6d5f14af",
    "1540518614846-7eded433c457",
    "1631049307264-da0ec9d70304",
  ].map(u),
  "Single Room": [
    "1536376072261-38c75010e6c9",
    "1598928506311-c55ded91a20c",
    "1595526114035-0d45ed16cfbf",
    "1618221195710-dd6b41faaea6",
    "1522156373667-4c7234bbd804",
  ].map(u),
  "Studio Apartment": [
    "1522708323590-d24dbb6b0267",
    "1502672260266-1c1ef2d93688",
    "1560448204-e02f11c3d0e2",
    "1556020685-ae41abfc9365",
    "1493809842364-78817add7ffb",
    "1484154218962-a197022b5858",
  ].map(u),
  "Shared Apartment": [
    "1555041469-a586c61ea9bc",
    "1586023492125-27b2c045efd7",
    "1513694203232-719a280e022f",
    "1554995207-c18c203602cb",
    "1505691938895-1758d7feb511",
    "1512918728675-ed5a9ecdebfd",
  ].map(u),
  "Residence Hall": [
    "1523240795612-9a054b0db644",
    "1541339907198-e08756dedf3f",
    "1562774053-701939374585",
    "1545324418-cc1a3fa10c00",
    "1524178232363-1fb2b075b655",
    "1498243691581-b145c3f54a5a",
  ].map(u),
};
