---
app: solokey
kind: privacidad
locale: en
title: SoloKey Privacy Policy
updatedAt: 2026-07-16
---

This Privacy Policy describes how the **SoloKey** application (the "App") handles information. SoloKey is a **local-first** password manager: your data is stored encrypted on your own devices (Android and the Windows desktop companion) and is never sent to any server owned by the developer or by third parties.

**Summary:** SoloKey has no accounts, does not use the cloud, contains no advertising and performs no tracking. We do not collect, sell or share your personal information.

## 1. Data controller

The App is developed and maintained by Angel Ezequiel Barbosa Lomeli (Jalisco, Mexico). For any questions about this policy you can write to: barbosalomeliangelezequiel@gmail.com.

## 2. Local-first principle: we do not collect your data

The App works entirely on your device. The credentials, passwords, secure notes, API keys, TOTP codes, SSH keys and secure files you store are kept **encrypted locally** (a SQLite database on the device), and the cryptographic keys are protected by the operating system's secure storage (Android Keystore). The developer has no access to that information and never receives it.

## 3. What information the App handles and where it lives

- **Your vault contents:** the credentials and files you create. They are encrypted with Argon2id and AES-256-GCM and stored only on your device. They are never transmitted to the developer.
- **Master password and biometrics:** your master password is used to derive the encryption key; it is never stored in plain text or transmitted. Biometric authentication is handled by the operating system; the App never accesses your biometric data.
- **App preferences:** local settings (theme, language, lock timers) stored on the device.

## 4. Device permissions

The App requests only the permissions needed for its features, and only when you use them:

- **Camera:** to scan QR codes (for example, a TOTP secret or the sync pairing code). Images are processed on the spot and are neither stored nor sent anywhere.
- **Biometrics:** to unlock the vault with your fingerprint or face, handled by the system.
- **Notifications:** to show local alerts (for example, an approval request coming from the desktop companion). These are local notifications; no cloud messaging services are used.
- **Autofill service (Android):** to offer your credentials in other apps when you request it. The App only delivers the credential you choose, after you authenticate.

## 5. Device-to-device sync (optional)

Sync is **optional** and **peer-to-peer (P2P)** over your local network. If you enable it, your devices pair through a QR code and communicate with **end-to-end encryption** (AES-256-GCM). Data travels directly between your devices: it never passes through any server owned by the developer or third parties, and it is never stored in the cloud.

## 6. Leaked password check (optional)

The App includes a security audit with an **optional** feature that checks whether a password appears in known data breaches, using the public **Have I Been Pwned** service with the **k-Anonymity** method. With this method the App sends only the first five characters of the password's SHA-1 hash; your password or its full hash is **never** sent, and the service cannot identify the password or you. This check only happens if you turn it on.

## 7. No third parties, no analytics, no ads

The App does not integrate third-party analytics, tracking, advertising or crash reporting services. No advertising identifiers or usage profiles are created. Apart from the optional check described in section 6 and the local P2P sync, the App makes no connections that transmit your data.

## 8. Data retention and deletion

Since all information lives on your device, **you control its retention and deletion**:

- You can delete individual credentials or wipe the vault from within the App.
- Uninstalling the App removes its local database and the associated keys from the device.
- No data exists on the developer's servers, so there is nothing to request remote deletion for.

See the [Data deletion](/en/solokey/data-deletion/) page for the detailed procedure.

## 9. Security

The App uses authenticated AES-256-GCM encryption, Argon2id key derivation, automatic locking, brute-force protection, a secure keyboard and screen protection (blocking screenshots on Android). No system is infallible: keep your device updated and protect your master password, since without it your vault cannot be decrypted.

## 10. Children

The App is not directed at children and does not knowingly collect data from them. Since it collects no personal data, no processing aimed at children takes place.

## 11. Changes to this policy

We may update this policy to reflect changes in the App or in applicable regulations. The "Updated on" date indicates the latest revision. Relevant changes will be communicated on this same page.

## 12. Contact

For questions about this policy, write to barbosalomeliangelezequiel@gmail.com.

## 13. Governing law

This policy is governed by the applicable laws of the United Mexican States, including, where applicable, the Federal Law on Protection of Personal Data Held by Private Parties.
