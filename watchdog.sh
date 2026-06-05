#!/bin/bash
cd /home/z/my-project/.next/standalone
while true; do
    node server.js
    echo "Server crashed, restarting in 2 seconds..." >> /tmp/watchdog.log
    sleep 2
done
