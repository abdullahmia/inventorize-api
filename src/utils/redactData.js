const SensitiveKeys = {
  Password: "password",
  NewPassword: "new_password",
  OldPassword: "old_password",
  RepeatPassword: "repeat_password",
};

const sensitiveKeysList = Object.values(SensitiveKeys);

export const redactData = (data) => {
  if (
    typeof data === "object" &&
    data !== null &&
    !data.constructor.name.startsWith("model")
  ) {
    if (Array.isArray(data)) {
      return data.map((item) => redactData(item));
    }

    const redactedData = {};

    for (const key in data) {
      if (sensitiveKeysList.includes(key)) {
        redactedData[key] = "*****"; // replace sensitive values with *****
      } else {
        // Recursively redact sensitive keys within nested objects
        redactedData[key] = redactData(data[key]);
      }
    }

    return redactedData;
  } else {
    return data;
  }
};
