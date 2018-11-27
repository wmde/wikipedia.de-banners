# wikipedia.de-banners
This repository is for holding banner which are to be delivered to users via `wmde/banner-server`

Check `campaigns.yml` for the current campaign and banner configuration.
Ensure that only one banner is configured per point in time, as the banner server only
supports one concurrent banner and will drop all other banners (without throwing an error).
