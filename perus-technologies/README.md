# PERUS TECHNOLOGIES

Responsive public website and protected content dashboard for the PERUS TECHNOLOGIES product ecosystem.

## Admin access

The dashboard is at `/admin`. API access is restricted to signed-in Clerk users with a verified email listed in the shared `ADMIN_EMAILS` environment variable (comma-separated for multiple admins). Do not remove this allowlist or allow every signed-in account.

## Enquiry notifications

Enquiry submissions are stored in PostgreSQL whether or not email is configured. Optional SMTP notifications use these environment variables:

- `SMTP_HOST`
- `SMTP_PORT` (defaults to `587`)
- `SMTP_USER`
- `SMTP_PASSWORD` (store as a secret)
- `SMTP_FROM`
- `SMTP_SECURE` (`true` or `false`)
- `CONTACT_NOTIFICATION_TO`

## File uploads

Admin uploads use Replit App Storage with signed uploads. When storage is not provisioned, upload requests return a clear `503`; admins can still use HTTPS resource links. Do not store file bytes in PostgreSQL.

## Before publishing

Use production Clerk credentials for the published environment and connect the intended `perus.tech` domain. Configure optional SMTP secrets if email alerts are required.
