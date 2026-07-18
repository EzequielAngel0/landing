---
app: docuagent
kind: privacidad
locale: en
title: DocuAgent Privacy Notice
updatedAt: 2026-07-18
---

This Privacy Notice describes the personal data practices of **DocuAgent**, a conversational assistant that answers questions about documentation based on a provided knowledge base, available at `docuagent.angelezequiel.dev` (the "Service"). It is a demonstration and portfolio project. Frame of reference: Mexico (LFPDPPP).

## 1. Data controller

Angel Ezequiel Barbosa Lomeli, domiciled in Jalisco, Mexico, with contact email barbosalomeliangelezequiel@gmail.com, is responsible for the processing of your personal data under this Notice.

## 2. Personal data we collect

The Service processes the following categories of data:

- **From administrators:** email address and password (stored as a bcrypt hash, never in plain text) and the TOTP authentication factor. They are used for access to the administration panel.
- **From chat users:** the **text of the questions** you write and the generated **answers**, together with the **cited sources** and your feedback (helpful or not helpful), are recorded in an internal log for operation and service improvement purposes.
- **Technical data:** **IP address** (for rate limiting and anti-bot protection) and a functional **session cookie** (httponly) to keep the administrator session. We use no advertising or tracking cookies.

We do not request sensitive personal data. **Recommendation: do not include personal or confidential data in the text of your questions.**

## 3. Purposes of processing

1. Answering questions about the internal documentation (primary purpose).
2. Authenticating and controlling administrator access.
3. Service security: abuse prevention, rate limiting and anti-bot protection.
4. Service improvement based on feedback (secondary purpose).

## 4. Transfers and processors (third parties)

To generate answers, the text of your query and the relevant document fragments are sent to providers acting as processors:

- **Cohere:** text embeddings and reranking.
- **Google (Gemini):** the language model that writes the answer.
- **Cloudflare:** anti-bot protection (Turnstile), tunnel and network delivery.
- **Oracle Cloud Infrastructure (OCI):** application hosting.

These providers process the data under their own policies. We do not sell or commercialize your personal data.

## 5. Retention

Log records are kept for 12 months, unless a different legal obligation applies, and are then deleted or anonymized.

## 6. ARCO rights

Under Mexican law you may **Access, Rectify, Cancel or Object** to the processing of your data, and revoke your consent, by sending a request to barbosalomeliangelezequiel@gmail.com with information that allows us to identify you and the right you wish to exercise. We will respond within the legal deadlines.

## 7. Cookies

A single functional session cookie (httponly, secure) is used, required for the administration panel login. No analytics or advertising cookies are used.

## 8. Changes to this Notice

This Notice may be updated. The current version will be available on this page; the "Updated on" date indicates the latest revision.
