---
sidebar_position: 4
---
# Chicken-bot setup (advanced)

This bot documentation helps you to customize [basic bot install](./setup.md).

## Applicative logs

Application logs are located into `C:\Users\<user>\AppData\Roaming\<appName>\logs`.

### Activate debug logs
In order to augment logs with debug applicative logs : update `CHICKEN_BOT_VERBOSE` environment variable
````bash
set CHICKEN_BOT_VERBOSE=true
# or
export CHICKEN_BOT_VERBOSE=true
````

### Activate analytics logs

In order to augment logs with analytics logs : set `CHICKEN_BOT_VERBOSE_ANALYTICS` environment variable to `true`.

### Activate more error logs

In order to augment error logs, add `--trace-warnings` to the start command.

An alternate way to show logs (in a dedicated popup window) is to launch exe using this argument ` --enable-logging`.