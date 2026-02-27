# 📚 Eszti's Little Library
### Your Personal Library Management System

A single-file, offline-first web app for tracking your reading list. No account needed, no server, no installation — just open the HTML file in any modern browser and start adding books.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Book search** | Searches Open Library & Google Books simultaneously with live autocomplete |
| **Reading status** | Track books as *To Read*, *Reading*, or *Finished* |
| **Series grouping** | Books in the same series are automatically grouped together |
| **Manual entry** | Add any book by hand when search doesn't find it |
| **Price tracking** | Supports 40+ world currencies with proper symbol formatting |
| **Ownership** | Mark books as Physical, Virtual, or Not Owned |
| **Sorting & filtering** | Sort by title, author, year, or date added; filter by keyword |
| **Grid & list view** | Switch between card grid and compact list layout |
| **Themes** | 10 background colour themes (Purple, Red, Green, Teal, Pink, Light, and more) |
| **Languages** | UI available in English, Español, Français, Deutsch, Português, Magyar |
| **Google Sheets sync** | Two-way sync with a Google Sheet via an Apps Script relay |
| **CSV backup** | Download and restore your full library as a CSV file |
| **Local storage** | All data stored in the browser's IndexedDB — nothing leaves your device |

---

## 🚀 Getting Started

1. Download `Eszti_s_Little_Library.html`
2. Open it in any modern browser (Chrome, Firefox, Edge, Safari)
3. Start searching for books or add them manually
4. That's it — your library is saved automatically in your browser

> **Tip:** Bookmark the file path in your browser for quick access, or keep the file in your cloud drive (Google Drive, Dropbox, OneDrive) and open it from there.

---

## 🔄 Google Sheets Sync (Two-Way)

The sync feature lets you keep a live copy of your library in a Google Sheet. You can push your library to the sheet from any device, and pull it back on another.

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet
2. Give it a name you'll recognise (e.g. *Eszti Library*)

### Step 2 — Install the relay script

1. In your sheet, click **Extensions → Apps Script**
2. Delete any code already in the editor
3. Open `eszti_library_relay.gs` (included with this app) and paste its entire contents
4. Click **Save** (or press `Ctrl+S`)

### Step 3 — Deploy the script as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to *Select type* and choose **Web App**
3. Set:
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
4. Click **Deploy**
5. When prompted, click **Authorise access** and follow the Google sign-in flow
6. After authorisation, Google shows you the **Web App URL** — copy it (it looks like `https://script.google.com/macros/s/AKfy.../exec`)

### Step 4 — Connect the app

1. Open Eszti's Little Library
2. Click **⇅ Sync** in the top-right
3. Paste your Web App URL into the *Apps Script Relay URL* field
4. Click **↑ Push to Sheets** to write your library to the sheet for the first time

### Using Sync day-to-day

| Button | What it does |
|---|---|
| **↑ Push to Sheets** | Overwrites the `Eszti_Library` tab with your current local library |
| **↓ Pull from Sheets** | Replaces your local library with whatever is in the sheet |

> ⚠ Both push and pull are **full overwrites** — there is no merge. Always push before switching devices.

---

## 💾 Local CSV Backup

If you don't want to use Google Sheets, you can back up and restore your library using CSV files.

1. Click **⇅ Sync → Local Backup**
2. Click **↓ Download CSV Backup** to save a `.csv` file
3. To restore, drag and drop the file into the *Restore from file* area, then click **↑ Restore from File**

The CSV can also be opened in Excel, Google Sheets, or Numbers to view or edit your library outside the app.

### CSV column format

| Column | Description |
|---|---|
| Title | Book title |
| Author | Author name |
| Pages | Page count |
| Series | Series name (optional) |
| Year Published | Publication year |
| Ownership | `physical`, `virtual`, or `none` |
| Price | Numeric price amount |
| Currency | ISO currency code (e.g. `USD`, `EUR`, `HUF`) |
| Status | `TO_READ`, `READING`, or `FINISHED` |
| Date Added | Date the book was added |

---

## ⚙ Settings

Click the **⚙** button in the top-right to open Settings.

- **Language** — switch the UI between English, Español, Français, Deutsch, Português, and Magyar
- **Background Theme** — choose from 10 colour themes
- **API Key** — optionally add a Google Gemini API key as a fallback for book search

---

## 🗂 Data & Privacy

- Your library is stored in your **browser's IndexedDB** — it never leaves your device unless you explicitly push to Google Sheets or download a CSV
- The app makes outbound requests only to:
  - Open Library (`openlibrary.org`) — for book search
  - Google Books API — for book search
  - Your Apps Script relay URL — only when you click Push or Pull
  - Google Fonts — for typography
- No analytics, no tracking, no ads

---

## 🛠 Technical Notes

- Single HTML file — no build step, no dependencies to install
- Uses React 18 (via CDN), Tailwind CSS (via CDN), and SheetJS for Excel parsing
- All state managed via React hooks; persistent data via IndexedDB
- Compatible with Chrome 90+, Firefox 88+, Edge 90+, Safari 15+

---

## 📝 Changelog

### v2.0
- Added Google Sheets two-way sync via Apps Script relay
- New Sync & Backup modal replacing the old Import/Export buttons
- Price field now supports 40+ world currencies with proper symbol display
- Added language selector (6 languages) and background theme picker (10 themes)
- Improved white/light theme readability throughout

### v1.0
- Initial release with search, status tracking, series grouping, CSV export/import

---

*Made with ♥ by Clawy — powered by Claude Sonnet*
