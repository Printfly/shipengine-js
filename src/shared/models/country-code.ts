const CountryCodes = [
  "AF",
  "AI",
  "AD",
  "AG",
  "AL",
  "AM",
  "AO",
  "AQ",
  "AR",
  "AS",
  "AE",
  "AT",
  "AU",
  "AW",
  "AX",
  "AZ",
  "BI",
  "BT",
  "BW",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BJ",
  "BL",
  "BM",
  "BN",
  "BO",
  "BR",
  "BS",
  "BV",
  "BY",
  "BZ",
  "CA",
  "CD",
  "CF",
  "CG",
  "CM",
  "CN",
  "CR",
  "CC",
  "CH",
  "CI",
  "CK",
  "CL",
  "CO",
  "CU",
  "CV",
  "CX",
  "CY",
  "CZ",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "EH",
  "ER",
  "ES",
  "ET",
  "FI",
  "FJ",
  "FK",
  "FM",
  "FO",
  "FR",
  "GB",
  "GA",
  "GD",
  "GE",
  "GF",
  "GG",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GP",
  "GQ",
  "GR",
  "GS",
  "GT",
  "GU",
  "GW",
  "GY",
  "HT",
  "HK",
  "HM",
  "HN",
  "HR",
  "HU",
  "ID",
  "IL",
  "IM",
  "IR",
  "IE",
  "IN",
  "IO",
  "IQ",
  "IS",
  "IT",
  "JE",
  "JM",
  "JO",
  "JP",
  "KM",
  "KE",
  "KG",
  "KH",
  "KI",
  "KN",
  "KR",
  "KW",
  "KY",
  "KZ",
  "LB",
  "LV",
  "LA",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LY",
  "MF",
  "MS",
  "MT",
  "MX",
  "MA",
  "MC",
  "MD",
  "ME",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MP",
  "MQ",
  "MR",
  "MU",
  "MV",
  "MW",
  "MY",
  "MZ",
  "NI",
  "NP",
  "NA",
  "NC",
  "NE",
  "NF",
  "NG",
  "NL",
  "NO",
  "NR",
  "NU",
  "NZ",
  "OM",
  "PE",
  "PG",
  "PR",
  "PS",
  "PA",
  "PF",
  "PH",
  "PK",
  "PL",
  "PM",
  "PN",
  "PT",
  "PW",
  "PY",
  "QA",
  "RE",
  "RO",
  "RS",
  "RU",
  "RW",
  "SD",
  "SE",
  "SA",
  "SB",
  "SC",
  "SG",
  "SH",
  "SI",
  "SJ",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "ST",
  "SV",
  "SY",
  "SZ",
  "TC",
  "TD",
  "TF",
  "TG",
  "TH",
  "TJ",
  "TK",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "UM",
  "US",
  "UY",
  "UZ",
  "VG",
  "VA",
  "VC",
  "VE",
  "VI",
  "VN",
  "VU",
  "WF",
  "WS",
  "YE",
  "YT",
  "ZA",
  "ZM",
  "ZW",
] as const;

export type CountryCode = typeof CountryCodes[number];
