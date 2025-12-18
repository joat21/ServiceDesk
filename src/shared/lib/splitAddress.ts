// вся эта функция - временный костыльный костыль
export const splitAddress = (fullAddress?: string) => {
  if (!fullAddress) return;

  const cityMatch = fullAddress.match(
    /^г\.\s([^,]+?)(?=\sул\.|\sпр\.|\sд\.|$)/
  );

  if (!cityMatch) {
    return {
      city: undefined,
      address: fullAddress,
    };
  }

  const city = cityMatch[1];
  const address = fullAddress.replace(`г. ${city}`, '').trim();

  return { city, address };
};
