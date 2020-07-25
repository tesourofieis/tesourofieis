#!/usr/bin/bash

year=$1
start=$2
end=$3
start=$(date -d $start +%Y%m%d)
end=$(date -d $end +%Y%m%d)


curl -s 0.0.0.0:5000/pt/api/v3/calendar/${year} > ./date/${year}


while [[ $start != $end ]]
  do
    echo $start
    echo $end
    end=$(date -d"$end" +"%Y-%m-%d")
    start=$(date -d"$start + 1 day" +"%Y-%m-%d")
        curl -s 0.0.0.0:5000/pt/api/v3/date/${start} > ./date/${start}
  done

