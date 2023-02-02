#!/usr/bin/bash

start='2023-01-01'
end='2033-01-01'

start=$(date -d $start +%Y-%m-%d)
end=$(date -d $end +%-Y%m-%d)

while [[ $start < $end ]]; do
	echo "$start"
	start=$(date -d"$start + 1 day" +"%Y-%m-%d")
	curl -s 0.0.0.0:5000/pt/api/v3/calendar/"$(date -d "$start" +%Y)" >./date/"$(date -d "$start" +%Y)"
	curl -s 0.0.0.0:5000/pt/api/v3/date/"${start}" >./date/"${start}"
done
