YEAR_FROM=2019
YEAR_TO=2021
itr=0
for year in `seq $YEAR_FROM $YEAR_TO`; do
    echo $year
    curl -s 0.0.0.0:5000/pt/api/v2/calendar/2019 > ./date/2019.json
    curl -s 0.0.0.0:5000/pt/api/v2/calendar/2020 > ./date/2020.json

    while [ 1 ]; do
        my_date=`date -j -v +${itr}d -f "%Y-%m-%d" $YEAR_FROM"-01-01" +%Y-%m-%d`
        if [[ $my_date == ${YEAR_TO}* ]]; then
            exit
        fi
        echo ${my_date}
        # COPY FROM LOCALHOST TO DATA FOLDER
        curl -s 0.0.0.0:5000/pt/api/v2/date/${my_date} > ../date/${my_date}.json
        itr=$(( itr + 1 ))
    done
done