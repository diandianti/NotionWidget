#!/usr/bin/env bash

curl_get() {
    curl ${1} &
}

main_test() {
    url=${1}

    for i in `seq 100`
    do
        curl_get "${url}/bar"
        curl_get "${url}/weather"
        curl_get "${url}/clock"
    done

}


main_test ${1}
