import Papa from "papaparse";
import * as XLSX from "xlsx";

export type DownloadOptions = {
  filename?: string;
  sheetName?: string;
};

export function downloadCSV(data: any[], columns: any[], options: DownloadOptions = {}) {
  const { filename = "data.csv" } = options;

  // Extract headers from columns
  const headers = columns.map(col => col.header || col.accessorKey || col.id);

  // Transform data to match column order
  const transformedData = data.map((row) => {
    const newRow: any = {};
    columns.forEach((col) => {
      const key = col.accessorKey || col.id;
      newRow[col.header || key] = row[key];
    });
    return newRow;
  });

  // Convert to CSV with enhanced options
  const csv = Papa.unparse(transformedData, {
    header: true,
    columns: headers,
    quotes: true, // Quote all fields
    quoteChar: "\"",
    escapeChar: "\"",
    delimiter: ",",
    newline: "\r\n", // Windows line endings
    skipEmptyLines: true,
  });

  // Create blob and download
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadXLSX(data: any[], columns: any[], options: DownloadOptions = {}) {
  const { filename = "data.xlsx", sheetName = "Sheet1" } = options;

  // Extract headers from columns
  const headers = columns.map(col => col.header || col.accessorKey || col.id);

  // Transform data to match column order
  const transformedData = data.map((row) => {
    const newRow: any = {};
    columns.forEach((col) => {
      const key = col.accessorKey || col.id;
      newRow[col.header || key] = row[key];
    });
    return newRow;
  });

  // Create worksheet
  const ws = XLSX.utils.json_to_sheet([headers, ...transformedData.map(row =>
    headers.map(header => row[header]),
  )]);

  // Create workbook
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);

  // Write file
  XLSX.writeFile(wb, filename);
}
