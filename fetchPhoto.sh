#!/usr/bin/env bash

url=`echo $1 | cut -d',' -f2`
image_name=`echo $1 | cut -d',' -f1`
image_id=`echo $url | cut -d'/' -f5`
download_url="https://unsplash.com/photos/$image_id/download"

echo "Fetching URL $url"
echo "Image ID $image_id"
wget $download_url -O "/tmp/$image_id.jpg"
convert "/tmp/$image_id.jpg" -resize 512x -resize 'x512<' -gravity center  -crop 512x512+0+0 +repage "/tmp/$image_id\_cropped.jpg"
jpegoptim "/tmp/$image_id\_cropped.jpg" -d "./static/images/" -s -m85
mv  "./static/images/$image_id\_cropped.jpg" "./static/images/$image_name.jpg"

