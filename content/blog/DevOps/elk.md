---
title: ELK Stack Notes!
date: '2019-01-31'
---
# ELK Stack notes

## Elasticsearch

Increase production virtual memory
`sudo sysctl -w vm.max_map_count=262144`

## Filebeat

Start Filebeat
`sudo /etc/init.d/filebeat start`

Config Filebeat
`sudo vi /etc/filebeat/filebeat.yml`

# To see a list of available indexes
curl 'localhost:9200/_cat/indices?v'