# Interval-Bolt

Interval-Bolt is a local ABA and school observation recorder. It starts with an empty workspace and runs without a build step, account, telemetry, or external libraries.

## Start recording

1. Open the GitHub Pages app over HTTPS, or download and open `index.html` in a browser for the standalone edition.
2. Add a learner. A local identifier can stand in for a name.
3. Create targets with operational definitions and measurement types, then start a session.
4. Record observations and make corrections in the event tape. For linked ABC, use **+ Link ABC** after a frequency increment or completed duration.
5. Review date-based summaries in **Reports**. The browser print dialog provides PDF output.

The hosted edition caches its application files after the first successful online load. Use your browser’s install or add-to-home-screen option if available. A downloaded HTML file can open offline on browsers that support local HTML and local browser storage. Local-file and hosted storage are separate. File handling and PWA installation vary by browser. Use the hosted edition where the device only previews downloaded HTML.

## Measurement rules

- **Frequency** records signed count changes and displays a rate per elapsed session hour. The decrease button is disabled at zero.
- **Duration** and **latency** are independent target clocks. Latency starts at the cue and ends at the observed response. Time runs in the background unless paused. A timer can be adjusted before or after recording.
- **Partial interval** scores any occurrence during the interval. **Whole interval** scores an occurrence that lasted throughout the interval. Score after the window ends, then start the next window. A new interval is started manually to keep observation windows explicit.
- **Skill trials** record the selected prompt and its independence and correctness classifications at the time of entry.
- Event timestamps use UTC ISO 8601. Reports assign observations to the current browser’s local calendar dates.
- On desktop, number keys **1–9** increment the first nine frequency targets. **Space** starts or records the first duration or latency timer when focus is outside interactive controls. **Ctrl/Cmd+Z** or a right swipe in the live view undoes the most recent available correction.

## Local data and exports

**Quick snapshot** downloads a password-free JSON copy of the entire workspace, including the current session. Running timers are captured at their recorded elapsed value and restored paused. Restore is an explicit replacement operation. Transfer the file through your approved workflow (for example, AirDrop), then use **Settings → Backup & restore**.

Browser storage is scoped to the browser profile and site. Clearing site data or losing the device can erase records. Use snapshots regularly. LocalStorage is a limited fallback when IndexedDB is unavailable. Use one tab for recording. Stale-tab writes are rejected and the tab offers an export to recover its unsaved copy.

Privacy mode masks names and hides free-text notes and operational definitions from displayed or exported records. It is designed for screen sharing and still retains timestamps, identifiers, and structured observations. Review text labels and outputs before sharing. JSON backups and ordinary browser storage are unencrypted by the app. An email draft hands report text to your configured mail program when you choose that action. Use your organization’s approved storage, device access, retention, and sharing practices for real records. The software makes no HIPAA or FERPA certification claim.

Daily and raw CSVs are separate files. CSV uses quoted text, escaped double quotes, UTF-8 with BOM, CRLF row endings, and ISO dates. Spreadsheet software may apply its own date display formatting. JSON is the restore format.

## Develop and verify

Serve this directory from a local static server, such as `python3 -m http.server 8000`. Open `http://localhost:8000`. Use **Settings → Run self-checks** or `await IntervalBolt.selfTest()` in the browser console. The checks use temporary fictional data and a separate IndexedDB database.

To deploy a fork, use **Settings → Pages → Build and deployment → Source → GitHub Actions** and run **Publish Interval-Bolt** from `main`. The workflow stages the application shell and icons. Never commit workspace snapshots or reports to the repository.
