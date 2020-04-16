#!/usr/bin/env bash

YEAR_FROM=2020
YEAR_TO=2030
itr=0
for year in `seq $YEAR_FROM $YEAR_TO`; do
    while [ 1 ]; do
    echo $year
    curl -s 0.0.0.0:5000/pt/api/v3/calendar/${year} > ./date/${year}
        my_date=`date -j -v +${itr}d -f "%Y-%m-%d" $YEAR_FROM"-01-01" +%Y-%m-%d`
        if [[ $my_date == ${YEAR_TO}* ]]; then
            exit
        fi
        echo ${my_date}
        curl -s 0.0.0.0:5000/pt/api/v3/date/${my_date} > ./date/${my_date}
        itr=$(( itr + 1 ))
    done
done
