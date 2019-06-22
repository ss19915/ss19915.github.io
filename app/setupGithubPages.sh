cd dist
ls
echo "<script>" >> index.html
cat index.js >> index.html
echo "</script></html>" >> index.html
rm index.js
mv ./* ../../