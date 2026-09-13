---
title: "Corvix Shell"
category: "app"
lang: en
translation_key: corvix-shell
---

# Corvix Shell — SSH Terminal for Android

**Corvix Shell** is a terminal client for connecting to SSH servers from an Android device.
Connection entries and credentials are stored **encrypted, on the device only**, and every
session is a **direct connection** to the server you specify — no developer server, no relay.

- Package: `io.acusworks.corvix`
- Platform: Android
- Distribution: Google Play (release in preparation)
- [Privacy Policy / 개인정보처리방침](/corvix-shell/privacy/)

---

## Stays on your device

Connection details (host, port, username) and credentials (passwords, SSH private keys, key
passphrases) are kept in encrypted form in the device's internal storage. The developer
operates no server, and there is no cloud sync or account backup. Stored information never
leaves the device it was entered on.

## Direct connection

The App connects straight to the SSH server you specify, without passing through any relay.
Traffic is encrypted by the SSH protocol, and the developer has no access to the servers you
connect to or to anything exchanged in your terminal sessions.

## Import and export

- **Private key import** — reads only the key file you pick in the system file picker.
- **Connection export** — writes your saved connection entries to a file. It runs only when
  you initiate it, and the file goes to a location you choose.

> An exported file may contain credentials. Keep it somewhere safe and delete it when it is
> no longer needed.

## No account required

There is no sign-up or login. The App contains no advertising, analytics, crash reporting,
or any other third-party SDK.

---

## Permissions

| Permission | Purpose |
|---|---|
| Internet | Reaching the SSH server you specify |
| File selection | Importing a private key or exporting connection entries — only the file you pick in the system file picker |

The App does not request access to other files on the device or to storage as a whole.

## Data deletion

Anything the App stores can be deleted individually inside the App, and is removed entirely
when the App is uninstalled. There is no developer-held data to request deletion of.

## Contact

- Email: [wise.polymathes+corvix@gmail.com](mailto:wise.polymathes+corvix@gmail.com)
- Privacy policy: [/corvix-shell/privacy/](/corvix-shell/privacy/)
