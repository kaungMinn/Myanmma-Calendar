// export type QnaFilterHookFormTypes = {
//   pests: (string | number)[];
//   productions: (string | number)[];
//   qa_status: string | number;
//   tags: (string | number)[];
// };

// const defaultValues = {
//   pests: [],
//   productions: [],
//   qa_status: "",
//   tags: [],
// };

export type QnaFilterHookFormTypes = {
  tag: (string | number)[];
  comment: string | number;
  production: (string | number)[];
  pests: (string | number)[];
};

const defaultValues: QnaFilterHookFormTypes = {
  tag: [],
  comment: "",
  production: [],
  pests: [],
};

export const QnaFilterHookForm = { defaultValues };
