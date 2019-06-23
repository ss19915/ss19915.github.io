if [ -f '.env' ]; then
    source .env
fi

BUILD_PATH=${BUILD_PATH:='dist'}
BUILD_FILE=${BUILD_FILE:='index.html'}
APP_FILE=${APP_FILE:='index.js'}
BUILD_PREFIX=${BUILD_PREFIX:="<script>"}
BUILD_SUFFIX=${BUILD_SUFFIX:="</script></html>"}

cd $BUILD_PATH
echo $BUILD_PREFIX >> $BUILD_FILE
cat $APP_FILE >> $BUILD_FILE
echo $BUILD_SUFFIX >> $BUILD_FILE
rm $APP_FILE
mv ./* ../../