export function mergeSlotClasses(
  ...sources: Array<Record<string, unknown> | undefined>
) {
  const result: Record<string, string> = {};

  for (const source of sources) {
    if (!source) continue;

    for (const [key, value] of Object.entries(source)) {
      if (!value) continue;

      result[key] = result[key]
        ? `${result[key]} ${String(value)}`
        : String(value);
    }
  }

  return result;
}
