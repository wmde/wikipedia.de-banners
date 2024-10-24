# wikipedia.de-banners
This repository is for holding banner which are to be delivered to users via `wmde/banner-server`

Check `campaigns.yml` for the current campaign and banner configuration.
Ensure that only one banner is configured per point in time (and per display range), as the banner server only
supports one concurrent banner and will drop all other banners (without throwing an error).

This repo is pulled and auto-deployed every 15 minutes.

## How to commit to this repository

Since this is mostly a data store for "binaries", we don't do pull
requests here. The usual workflow is to do a "git pull", commit your files
and then do a "git push" to `main`. 

**You should never do `git push --force-with-lease` or `git push --force` in this repository!**
That would override other people's changes.

Depending on your global Git configuration, you might run `git config pull.rebase true` once in this repository to avoid merge commits.
