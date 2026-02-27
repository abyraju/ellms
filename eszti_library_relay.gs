// ============================================================
//  Eszti's Little Library — Google Sheets Relay
//  Version 1.0
//
//  Setup:
//  1. Open your Google Sheet
//  2. Extensions → Apps Script
//  3. Paste this entire file, replacing any existing code
//  4. Click Save (Ctrl+S)
//  5. Click Deploy → New deployment
//     - Type: Web App
//     - Execute as: Me
//     - Who has access: Anyone
//  6. Click Deploy, authorise when prompted
//  7. Copy the Web App URL and paste it into the app's
//     Sync & Backup → Google Sheets Sync panel
// ============================================================

const SHEET_NAME = 'Eszti_Library';

function doPost(e) {
  try {
    const body  = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const tab   = body.tab || SHEET_NAME;
    const sheet = ss.getSheetByName(tab) || ss.insertSheet(tab);

    // ── Write (Push from app → Sheet) ──────────────────────
    if (body.action === 'write') {
      sheet.clearContents();
      if (body.values && body.values.length) {
        sheet.getRange(1, 1, body.values.length, body.values[0].length)
             .setValues(body.values);

        // Auto-resize columns for readability
        sheet.autoResizeColumns(1, body.values[0].length);

        // Bold the header row
        sheet.getRange(1, 1, 1, body.values[0].length)
             .setFontWeight('bold');
      }
      return respond({ written: body.values ? body.values.length - 1 : 0 });
    }

    // ── Read (Pull from Sheet → app) ───────────────────────
    if (body.action === 'read') {
      const range  = body.range || 'A:K';
      const values = sheet.getRange(range).getValues();
      // Strip trailing empty rows
      const trimmed = values.filter(row => row.some(cell => String(cell).trim() !== ''));
      return respond({ values: trimmed });
    }

    return respond({ error: 'Unknown action: ' + body.action });

  } catch (err) {
    return respond({ error: err.message });
  }
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Needed so the deployed URL works when opened directly in a browser
function doGet(e) {
  return respond({ status: 'Eszti Library relay online ✓' });
}
