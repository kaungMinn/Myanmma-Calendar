export const ACCOUNT_TYPE = ["Unknown", "Normal", "Partner", "Business Administrator"];

export const ACCOUNT_TYPE_FOR_SELECT = [
  { value: 1, label: "Normal" },
  { value: 2, label: "Partner" },
  { value: 3, label: "Business Administrator" },
];

const COUNTRY_CODES = [
  { value: "95", label: "+95" },
  { value: "249", label: "+249" },
];

export const SYSTEM_USERS = { ACCOUNT_TYPE, COUNTRY_CODES, ACCOUNT_TYPE_FOR_SELECT };
