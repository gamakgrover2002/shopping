export const getLocation = async (lat, lng) => {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=7456278c7aae417693d4b8c08bad63a5`
  );
  const result = await res.json();
  const x =
    result?.results[0]?.address_line1 + result?.results[0]?.address_line2;

  return x;
};
